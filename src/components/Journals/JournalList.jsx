import React, {useState, useEffect, useContext} from "react";
import JournalCard from "./JournalCard";
import axios from "axios";
import JournalListSkeleton from "../Skeletons/JournalListSkeleton";
import {ErrorContext} from "../../contexts/ErrorContext";
import {JOURNALS_API} from "../../config"
import "./JournalList.css";



const JournalList = ({shouldFetchJournals}) => {
  // ==================================================================
  // FETCHING DATA FROM DATABASE

  const [blogs,setBlogs]=useState([]);
  const [loading,setLoading]=useState(false);
  const { showError } = useContext(ErrorContext);

  useEffect(()=>{
    if(!shouldFetchJournals) return;

    let isMounted=true;
    const controller = new AbortController();

    const fetchJournals= async()=> {
      try {
        if (isMounted) setLoading(true); 
        const res= await axios.get(JOURNALS_API+ '/',{
          signal: controller.signal
        });
        if (isMounted) setBlogs(res.data)
        }
      catch (err) {
        console.error(err);
        if (!(err.name === "CanceledError" || err.name === "AbortError")) {
          showError("Failed to load journals. Please try again later.");
        }
      }finally{
        if (isMounted) setLoading(false);
      }
    };
    fetchJournals();
    return()=>{
      isMounted=false;
      controller.abort(); }
      },[shouldFetchJournals, showError])

  // ==================================================================

  if(!shouldFetchJournals){ return null; }

  // ==================================================================

  if (loading) {
    return <JournalListSkeleton />;
  }

  return (
    <div className="journal-page">
      <section className="journal-contribute" aria-labelledby="journal-contribute-title">
        <h2 id="journal-contribute-title">Want to Contribute a Journal?</h2>
        <p>
          Send your journal with your name, semester, department, and relevant
          details to <strong>imspectrum1@gmail.com</strong>. After review, we
          will publish it here.
        </p>
      </section>

      {blogs.length === 0 ? (
        <p className="journals-empty">No journals found.</p>
      ) : (
        <JournalCard blogs={blogs}/>
      )}
    </div>
  );
};

export default JournalList;
