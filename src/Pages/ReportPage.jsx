import React, { useState } from 'react';
import ReportSummary from '../Components/ReportSummary';


const ReportPage = () => {
    const [info, setInfo] = useState([])
    const post_array = [];
    const apiUrl = 'https://api.dataforseo.com/v3/on_page/lighthouse/live/json';
    const username = 'tasminsania77@gmail.com';
    const password = 'd0a60129f5fffc7c';

    const PostTask = (e) => {

        e.preventDefault()

        const form = e.target;
        const url = form.url.value;

        post_array.push({  
                "url": `${url}`,
                "for_mobile": true,
                "tag": "some_string_123"    
        })

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            },
            body: JSON.stringify(post_array)
        })
            .then(response => response.json())
            .then(data => {
                var result = data['tasks'];
                // Result data
                // console.log(result)
                setInfo(result);
                console.log(info[0]?.result[0])
                e.target.reset();
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <section className='h-full'>
            <section>
                <form onSubmit={PostTask} className='w-60 mx-auto mt-14 flex gap-3' >
                    <input name='url' className='border border-purple-500 rounded-lg py-2 px-2' placeholder='Paste the URL' type="text" />
                    <input className='w-24 font-sans font-medium py-1 px-2 border border-black rounded-lg hover:bg-purple-500  hover:text-white' type="submit" value="Send" />
                </form>
            </section>
            <section>
                 {info.length > 0 && <ReportSummary info={info}></ReportSummary>}
                
                
            </section>

        </section>
    );
};

export default ReportPage;