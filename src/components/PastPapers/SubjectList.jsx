import React, { useState, useEffect, useContext } from "react";
import { ErrorContext } from "../../contexts/ErrorContext";
import { SUBJECTS_API } from "../../config";
import SubjectSearch from "./SubjectSearch";
import SubjectCard from "./SubjectCard";
import SubjectListSkeleton from "../Skeletons/SubjectListSkeleton";
import axios from "axios";
import "./SubjectList.css";


const SubjectList = ({shouldFetchSubject}) => {
  const [subjects, setSubject]=useState([]);
  const [loading, setLoading]=useState(false)
  const { showError } = useContext(ErrorContext);

  useEffect(()=>{
    if(!shouldFetchSubject) return;
    
    const controller = new AbortController();
    let isMounted=true;

    const fetchSubject = async ()=>{
      try{
        if(isMounted) setLoading(true);
        const res=await axios.get(SUBJECTS_API+'/',{
        signal:controller.signal,
      });
      if(isMounted) setSubject(res.data)
    }catch (err){
     if (!(err.name === "CanceledError" || err.name === "AbortError")) {
          showError("Failed to load subjects. Please try again later.");
        }
      }
    finally{
      if(isMounted) setLoading(false)}
    };

    fetchSubject();
    return() => {
      isMounted=false;
      controller.abort();}
  },[shouldFetchSubject,showError])


// =================================================================
  // Subject search logic code below 
  const [subjectInput,setSubjectInput]=useState("");

  // Search handler
  function handleChange(e){
    const value=e.target.value.toLowerCase();
    setSubjectInput(value)
  }

  // Filter subjects
  const filteredSubjects=subjects.filter((subject)=>
    subject.subject_title.toLowerCase().includes(subjectInput)   //Empty input → includes("") is always true.
  );
  
if (!shouldFetchSubject) return null;

  if (loading) {
    return (
      <div className="parent-container">
        <div>
          <SubjectSearch onChange={handleChange} input={subjectInput} />
        </div>
        <SubjectListSkeleton />
      </div>
    );
  }

  return (
    <div className="parent-container">
      <section className="hosting-support" aria-labelledby="hosting-support-title">
        <h2 id="hosting-support-title">Help Us Keep the Site Running</h2>
        <p>
          Site is currently running on free hosting, which make it slow
          at times. We're trying to move to better hosting and get a proper
          domain so the site stays fast and accessible.
        </p>
        <p className="hosting-goal"><strong>Hosting Goal: Rs. 5,000</strong></p>
        <p>
          You can donate <strong> any amount. Thank You! </strong>
        </p>
        <div className="hosting-account">
          <p><strong>Account Name:</strong> Siffat ullah</p>
          <p><strong>Easypaisa:</strong> 03467755446</p>
        </div>
      </section>
      <div >
        <SubjectSearch onChange={handleChange} input={subjectInput}/>
      </div>
      <div className="cards">
        {filteredSubjects.length > 0 ? (filteredSubjects.map((subject, index) => (
          <SubjectCard
            key={subject.slug}
            title={subject.subject_title}
            link={`/past-papers/${subject.slug}`}
          />
        )))
        : (
        <p className="NotFound">No subject found by the name: {subjectInput}</p>)
      }
      </div>
    </div>
  );
};
export default SubjectList;
