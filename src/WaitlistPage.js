
function WaitlistPage() {

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };


  return (
    <div className="w-screen h-screen flex justify-center items-center font-sans">
      <div className="shadow-custom p-[10px] pt-[50px] h-[400px] w-[400px] rounded text-black">
        <div className="text-center w-full text-[20px]">
          <p>Welcome to Impact Journey!</p>
        </div>
        <div className="text-center text-[15px] mb-[20px]">
          <p>Our sign up isn't fully functional yet, so please waitlist here!</p>
        </div>
        <div className="flex flex-col h-[210px] justify-between pt-[10px]">
          <form>
            <p>Name:</p>
            <textarea
              className="border-[1.8px] border-gray-200 rounded-[7px] pl-[3px] resize-none w-half h-[27px] text-[15px]"
              placeholder="John Doe"
              onKeyDown={handleKeyDown}
            >
            </textarea>
            <p>Email:</p>
            <textarea
              className="border-[1.8px] border-gray-200 rounded-[7px] pl-[3px] resize-none w-half h-[27px] text-[15px]"
              placeholder="johndoe@example.com"
              onKeyDown={handleKeyDown}
            >
            </textarea>
          </form>
          <button>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default WaitlistPage;
