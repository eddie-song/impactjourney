import React, { useState } from 'react';
import { getDatabase, ref, push, set } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDIDt6UxrD9wO9V-QhSDmDG2D45gGb65U",
  authDomain: "impact-journey-e6c69.firebaseapp.com",
  projectId: "impact-journey-e6c69",
  storageBucket: "impact-journey-e6c69.appspot.com",
  messagingSenderId: "47757712051",
  appId: "1:47757712051:web:f743a841b113e820d52ec6",
  measurementId: "G-KD7TZ35BER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // eslint-disable-line no-unused-vars

function WaitlistPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const database = getDatabase(app);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveWaitlistUser(name, email);
  };

  const saveWaitlistUser = (name, email) => {
    const newUserRef = push(ref(database, 'waitlist'));
    set(newUserRef, {
      name: name,
      email: email
    }).then(() => {
      setMessage('Thank you for joining the waitlist!');
      setName('');
      setEmail('');
    }).catch((error) => {
      console.error('Error adding to waitlist:', error);
      setMessage('Failed to join the waitlist. Please try again.');
    });
  };

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
          <form onSubmit={handleSubmit}>
            <p>Name:</p>
            <textarea
              className="border-[1.8px] border-gray-200 rounded-[7px] pl-[3px] resize-none w-half h-[27px] text-[15px]"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <p>Email:</p>
            <textarea
              className="border-[1.8px] border-gray-200 rounded-[7px] pl-[3px] resize-none w-half h-[27px] text-[15px]"
              placeholder="johndoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button type="submit">
              Submit
            </button>
          </form>
          {message && <p className="text-center text-[15px] mt-[20px]">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default WaitlistPage;
