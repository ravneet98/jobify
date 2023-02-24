import { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAppContext } from "../context/appContext";
import Job from "./Job";
import Loading from "./Loading";
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchType,
    searchStatus,
    sort,
    numOfPages,
  } = useAppContext();
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, [page, search, searchType, searchStatus, sort]);
  if (isLoading) {
    return <Loading center />;
  }
  if (jobs.length === 0) {
    <Wrapper>
      <h2>No Jobs to display...</h2>
    </Wrapper>;
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"}
      </h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 ? <PageBtnContainer /> : ""}
    </Wrapper>
  );
};

export default JobsContainer;
