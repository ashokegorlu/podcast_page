import "./App.css";
import { BsFillStarFill } from "react-icons/bs";

function App() {
  return (
    <div className="bg-container px-20">
      <div className="container mx-auto flex items-center justify-between text-white py-2 pt-5">
        <p>logo</p>
        <ul className="flex">
          <li className="ml-20">About</li>
          <li className="ml-20">Pricing</li>
          <li className="ml-20">Review</li>
        </ul>
      </div>

      <div className="text-white flex flex-wrap pt-20">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold  pt-10">
            Learn how to launch a successful podcast
          </h1>
          <p className="py-4 pb-10">
            Launching a successful podcast involves identifying your target
            audience, investing in quality equipment, and promoting your show
            effectively. By understanding your audience, delivering high-quality
            audio, and engaging with listeners, you can create a captivating
            podcast that attracts and retains a loyal following.
          </p>
          <button className="button ">Sign up Now</button>
        </div>
        <div className="container w-1/2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxlpV5ilv01i1Mg7iebzArvvHMlLaNcXVClvpXXkEl&s"
            alt="podcast1"
            className="image pl-5"
          />
        </div>
      </div>

      <div className="flex flex-wrap pt-20">
        <div className="w-1/2 flex flex-wrap">
          <div className="border border-gray-600 rounded-lg box mr-5 mb-10 p-2">
            <h1 className="text-xl font-bold pb-2">Interactive Features</h1>
            <p>
              Interactive features of podcasts can include live Q&A sessions,
              audience participation through polls or surveys, and
              listener-submitted questions or comments.
            </p>
          </div>
          <div className="border border-gray-600 rounded-lg box mt-10 p-2">
            <h1 className="text-xl font-bold pb-2">Interactive Features</h1>
            <p>
              Interactive features of podcasts can include live Q&A sessions,
              audience participation through polls or surveys, and
              listener-submitted questions or comments.
            </p>
          </div>
          <div className="border border-gray-600 rounded-lg box mr-5 p-2 mb-10">
            <h1 className="text-xl font-bold pb-2">Interactive Features</h1>
            <p>
              Interactive features of podcasts can include live Q&A sessions,
              audience participation through polls or surveys, and
              listener-submitted questions or comments.
            </p>
          </div>
          <div className="border border-gray-600 rounded-lg box mt-10 p-2">
            <h1 className="text-xl font-bold pb-2">Interactive Features</h1>
            <p>
              Interactive features of podcasts can include live Q&A sessions,
              audience participation through polls or surveys, and
              listener-submitted questions or comments.
            </p>
          </div>
        </div>

        <div className="w-1/2  flex flex-col items-center justify-center">
          <div className="pl-20 py-10">
            <h1 className="text-2xl font-bold pb-5">About The Course </h1>
            <p className="pb-10">
              A podcast course typically covers topics such as podcasting
              fundamentals, content creation, storytelling techniques, audio
              production, editing, marketing strategies, monetization options,
              and audience engagement to help individuals learn how to create
              and grow a successful podcast
            </p>
            <button className="button">Explore Now</button>
          </div>
        </div>
      </div>

      <div>
        <div className="pt-20 flex flex-col items-center justify-center text-center">
          <div className="text-center  w-6/12 ">
            <h1 className="text-2xl font-bold">Choose Your Plan</h1>
            <p>
              The "Podcast Mastery" plan offers comprehensive guidance on
              podcasting, including content creation, audio production,
              marketing strategies, and monetization methods.
            </p>
            <div className=" drop-shadow-2xl bg-white-300 mt-5">
              <button className="bg-pink-300 rounded-lg pl-2 pr-2 mr-5 font-bold text-violet-500">
                Monthly
              </button>
              <button className="font-bold">Yearly</button>
            </div>
          </div>
        </div>

        <div className="flex pt-10">
          <div className="bg-white pl-10 drop-shadow-3xl mr-20 rounded-lg p-5">
            <h1 className="text-xl font-bold">Basic Plan</h1>
            <p className="pt-5 pb-2">
              The "Podcast Starter" plan provides essential resources and
              guidance for beginners, covering podcast setup, content creation
              tips, and basic promotion strategies.
            </p>
            <h1 className="text-2xl text-purple-700 font-bold pt-5">
              $ 54 /Monthly
            </h1>
            <ul className="font-bold list-disc py-5">
              <li>All content available in all languages</li>
              <li>Access on tv or laptop.</li>
              <li>No of devices is logged in one.</li>
            </ul>
            <button className="bg-transparent border py-1 px-8 text-purple-700 font-bold">
              Buy this plan
            </button>
          </div>
          <div className="bg-purple-700 pl-10 drop-shadow-3xl mr-20 rounded-lg p-5 text-white">
            <h1 className="text-xl font-bold">Primium Plan</h1>
            <p className="pt-5 pb-2">
              The "Podcast Starter" plan provides essential resources and
              guidance for beginners, covering podcast setup, content creation
              tips, and basic promotion strategies.
            </p>
            <h1 className="text-2xl font-bold pt-5">$ 64 /Monthly</h1>
            <ul className="font-bold list-disc py-5">
              <li>All content available in all languages</li>
              <li>Access on tv or laptop.</li>
              <li>No of devices is logged in one.</li>
            </ul>
            <button className="bg-white border border-gray-600 py-1 px-8 text-purple-700 font-bold">
              Buy this plan
            </button>
          </div>
          <div className="bg-white pl-10 drop-shadow-3xl rounded-lg p-5">
            <h1 className="text-xl font-bold">Basic Plan</h1>
            <p className="pt-5 pb-2">
              The "Podcast Starter" plan provides essential resources and
              guidance for beginners, covering podcast setup, content creation
              tips, and basic promotion strategies.
            </p>
            <h1 className="text-2xl text-purple-700 font-bold pt-5">
              $ 54 /Monthly
            </h1>
            <ul className="font-bold list-disc py-5">
              <li>All content available in all languages</li>
              <li>Access on tv or laptop.</li>
              <li>No of devices is logged in one.</li>
            </ul>
            <button className="bg-transparent border text-purple-700 font-bold py-1 px-8 ">
              Buy this plan
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-2xl pt-20">Review from customers</h1>
        <p className="pt-3">
          Highly recommended podcast with captivating discussions, <br />
          knowledgeable hosts, and valuable insights that keep me coming back
          for more.
        </p>
        <div className="py-5 flex">
          <div className="border drop-shadow-xl bg-white rounded-xl mr-10 p-5">
            <div className="flex p-3">
              <div className="pt-10">
                <img
                  className="h-12 w-12 rounded-3xl"
                  src="https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png"
                  alt="Review"
                />
              </div>

              <div className="pt-5 pl-5">
                <h1 className="text-indigo-500 font-bold">priya</h1>
                <p className="">Excellent</p>
                <div className="mt-2 flex">
                  <BsFillStarFill className="text-amber-500 mx-1"></BsFillStarFill>
                  <BsFillStarFill className="text-amber-500 mx-1"></BsFillStarFill>
                  <BsFillStarFill className="text-amber-500 mx-1"></BsFillStarFill>
                  <BsFillStarFill className="text-amber-500 mx-1"></BsFillStarFill>
                  <BsFillStarFill className="text-amber-500 mx-1"></BsFillStarFill>
                </div>
              </div>
            </div>

            <div className="text-left p-2">
              <p className="text-gray-600">
                "The podcast is incredibly informative and engaging, offering a
                deep dive into a wide range of thought-provoking topics. The
                hosts' dynamic chemistry keeps me hooked, while the high
                production quality ensures a seamless listening experience. It's
                a must-listen for anyone seeking intellectual stimulation and
                captivating discussions."
              </p>
            </div>
          </div>
          <div className="border drop-shadow-xl bg-white rounded-xl mr-10 p-5">
            <div className="flex p-3">
              <div className="pt-10">
                <img
                  className="h-12 w-12 rounded-3xl"
                  src="https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png"
                  alt="Reviewnpm "
                />
              </div>

              <div className="pt-5 pl-5">
                <h1 className="text-indigo-500 font-bold">priya</h1>
                <p className="">Excellent</p>
                <div className="mt-2 flex">
                  <BsFillStarFill className="text-amber-500 mx-1"></BsFillStarFill>
                  <BsFillStarFill className="text-amber-500 mx-1"></BsFillStarFill>
                  <BsFillStarFill className="text-amber-500 mx-1"></BsFillStarFill>
                  <BsFillStarFill className="text-amber-500 mx-1"></BsFillStarFill>
                  <BsFillStarFill className="text-amber-500 mx-1"></BsFillStarFill>
                </div>
              </div>
            </div>

            <div className="text-left p-2">
              <p className="text-gray-600">
                "The podcast is incredibly informative and engaging, offering a
                deep dive into a wide range of thought-provoking topics. The
                hosts' dynamic chemistry keeps me hooked, while the high
                production quality ensures a seamless listening experience. It's
                a must-listen for anyone seeking intellectual stimulation and
                captivating discussions."
              </p>
            </div>
          </div>
          <div className="border drop-shadow-xl bg-white rounded-xl p-5">
            <div className="flex p-3">
              <div className="pt-10">
                <img
                  className="h-12 w-12 rounded-3xl"
                  src="https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png"
                  alt="Review"
                />
              </div>

              <div className="pt-5 pl-5">
                <h1 className="text-indigo-500 font-bold">priya</h1>
                <p className="">Excellent</p>
                <div className="mt-2 flex">
                  <BsFillStarFill className="text-amber-500 mx-1"></BsFillStarFill>
                  <BsFillStarFill className="text-amber-500 mx-1"></BsFillStarFill>
                  <BsFillStarFill className="text-amber-500 mx-1"></BsFillStarFill>
                  <BsFillStarFill className="text-amber-500 mx-1"></BsFillStarFill>
                  <BsFillStarFill className="text-amber-500 mx-1"></BsFillStarFill>
                </div>
              </div>
            </div>

            <div className="text-left p-2">
              <p className="text-gray-600">
                "The podcast is incredibly informative and engaging, offering a
                deep dive into a wide range of thought-provoking topics. The
                hosts' dynamic chemistry keeps me hooked, while the high
                production quality ensures a seamless listening experience. It's
                a must-listen for anyone seeking intellectual stimulation and
                captivating discussions."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-20 pb-20">
        <div className="w-6/12 text-center">
          <h1 className="font-bold text-2xl">
            We have what you're looking for
          </h1>
          <p className="pt-3 text-violet-500 pb-10">
            Our podcast selection offers a wide range of topics and genres,
            ensuring we have exactly what you're looking for. From educational
            and entertaining to thought-provoking and inspiring, there's a
            podcast for everyone in our collection.
          </p>
          <button className="button">Get Started Now</button>
        </div>
      </div>

      <hr className="pb-0 bg-gray-500" />
      <div></div>
    </div>
  );
}

export default App;
