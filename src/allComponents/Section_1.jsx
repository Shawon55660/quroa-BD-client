import Lottie from "lottie-react";
import question from '../animation/questions.json'
import { Link } from "react-router-dom";


const Section_1 = () => {
    return (
        <div>

            <div className="grid md:grid-cols-2 w-full  md:w-9/12 mx-auto my-16">
                <div className="bg-red-500 ">
                    <Lottie animationData={question}></Lottie>
                </div>
                <div className="bg-[#380F8F] pl-8 pr-4 py-16 text-white">

                    <h2 className="text-2xl font-bold py-3 text-[#EF4444]">Ask A Question</h2>
                    <h1 className="text-5xl leading-normal font-semibold py-2">Get Help From Professionals</h1>
                    <p className="text-gray-400 py-2">Sed commodo odio eu condimentum eleifend. Maecenas semper nisl a mattis semper. Quisque sodales laoreet interdum. Aliquam ut erat sit amet nisl lobortis maximus lorem ipsum Etiam congue, sem id vulputate condimentum, nibh arcu lobortis lorem ipsum...</p>
                    <Link to='/my-queries'><button className='bg-[#EF4444] rounded-sm font-semibold my-4 px-4 py-2' >Add Your Query</button></Link>
                    

                </div>

            </div>
        </div>
    );
};

export default Section_1;