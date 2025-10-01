import { useEffect } from 'react';

const Description = ({ description, setDescription, project }) => {
  if (!description) return null;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 backdrop-blur-md z-40"
        onClick={() => setDescription(false)}
      ></div>

      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-2xl h-80 overflow-hidden flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">Project Description</h2>
            <button
              className="text-gray-500 hover:text-gray-700 text-xl cursor-pointer font-bold bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => setDescription(false)}
            >
              ✕
            </button>
          </div>

          <div className="p-4 overflow-y-auto flex-grow">
            {project ? (
              <>
                <h3 className="text-lg font-bold">{project.name}</h3>
                <p className="mt-2">{project.description || "No description available."}</p>
                <div className='mt-2'>
                  <span className='underline font-bold'>Tech Stack</span>
                  <p className='font-bold'>Fronted: {" "}
                    <b className='font-semibold'>{project.stack.fronted}</b>
                  </p>
                  <p className='font-bold'>Backend: {" "}
                    <b className='font-semibold'>{project.stack.backend}</b>
                  </p>
                </div>
              </>
            ) : (
              <p>No project selected.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
