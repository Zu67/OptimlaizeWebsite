import React from 'react';
import { useParams } from 'react-router-dom';
import caseStudies  from '../constants/CaseStudyConstants';

const CaseStudyDetail = () => {

  const { id } = useParams();
  const post = caseStudies.find(posts => posts.id.toString() === id);

  if (!post) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="mx-20 px-5 py-10 text-left">
      <section className="mb-10">
        <h1 className="text-6xl font-bold m-5 pb-20 text-center">{post.title}</h1>
        <h2 className="text-xl font-semibold mb-2">{post.client}</h2>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
        <p>{post.introduction}</p>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Project Description</h2>
        <p>{post.projectDescription}</p>
        <ul className="list-disc list-inside ml-5 mt-2">
          {post.technologies.map((tech, index) => (
            <li key={index}><strong>Technologies Used:</strong> {tech}</li>
          ))}
          {post.team.map((member, index) => (
            <li key={index}><strong>Team Composition:</strong> {member}</li>
          ))}
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Challenges Faced</h2>
        <ol className="list-decimal list-inside ml-5 mt-2">
          {post.challenges.map((challenge, index) => (
            <li key={index}><strong>{challenge.title}:</strong> {challenge.description}</li>
          ))}
        </ol>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Solutions Implemented</h2>
        <ul className="list-disc list-inside ml-5 mt-2">
          {post.solutions.map((solution, index) => (
            <li key={index}><strong>{solution.title}:</strong> {solution.description}</li>
          ))}
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Results Achieved</h2>
        <ul className="list-disc list-inside ml-5 mt-2">
          {post.results.map((result, index) => (
            <li key={index}><strong>{result.title}:</strong> {result.description}</li>
          ))}
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Lessons Learned</h2>
        <ul className="list-disc list-inside ml-5 mt-2">
          {post.lessons.map((lesson, index) => (
            <li key={index}><strong>{lesson.title}:</strong> {lesson.description}</li>
          ))}
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Conclusion</h2>
        <p>{post.conclusion}</p>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Appendices</h2>
        <ul className="list-disc list-inside ml-5 mt-2">
          {post.appendices.map((appendix, index) => (
            <li key={index}><strong>{appendix.title}:</strong> {appendix.description}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
