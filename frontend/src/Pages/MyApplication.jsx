


// import { useEffect, useState } from "react";
// import "../CSS/Application.css";

// function MyApplication() {
//     const [dataa, setData] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             let jwt = JSON.parse(localStorage.getItem("token"));
//             try {
//                 let res = await fetch("https://petpals-4.onrender.com/application/getApp", {
//                     method: 'GET',
//                     headers: {
//                         'Authorization': `Bearer ${jwt}`,
//                         'Content-Type': 'application/json'
//                     }
//                 });
//                 let { application } = await res.json();
//                 console.log(application, "dataaa");
//                 setData(application);
//             } catch (e) {
//                 console.log(e);
//             }
//         }
//         fetchData();
//     }, []);

    

//     return (
//         <div className="main-app-cont">
//             <main>
//                 {dataa.length === 0 ? <h1 className="not-app">You do not have any applications</h1> : <h1 className="h1-app">Applications</h1>}
//                 {dataa.map((elem, ind) => {
                    
//                     return (
//                         <div key={ind} className="app-cont">
//                             <div className="right">
//                                 <img src={elem.url} alt="" className="img-right"/>
//                             </div>
//                             <div className="left">
//                                 <div className="app-name"><h1>{elem.petName}</h1></div>
//                                 <div className="app-name-p">
//                                     <p>Age: {elem.petAge}</p>
//                                     <p>Color: {elem.color}</p>
//                                     <p>Gender: {elem.petGender}</p>
//                                     {elem.status === "Applied" && <p>Status: <span className="applied">Applied</span> <div className="app-stat"></div></p>}
//                                     {elem.status === "Reject" && <p>Status: <span className="rejected">Rejected</span> ❌</p>}
//                                     {elem.status === "Accept" && <p>Status: <span className="applied">Accepted</span> ✅</p>}
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </main>
//         </div>
//     );
// }

// export default MyApplication;



import { useEffect, useState } from "react";
import "../CSS/Application.css";

function MyApplication() {
    const [dataa, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let jwt = JSON.parse(localStorage.getItem("token"));
            try {
                let res = await fetch("https://petpals-4.onrender.com/application/getApp", {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${jwt}`,
                        'Content-Type': 'application/json'
                    }
                });
                let { application } = await res.json();
                console.log(application, "dataaa");
                setData(application);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="main-app-cont">
            <main>
                {!dataa ? <h1 className="not-app">You do not have any applications</h1> : <h1 className="h1-app">Applications</h1>}
                {Array.isArray(dataa) && dataa.map((elem, ind) => {
                    return (
                        <div key={ind} className="app-cont">
                            <div className="right">
                                <img src={elem.url} alt="" className="img-right"/>
                            </div>
                            <div className="left">
                                <div className="app-name"><h1>{elem.petName}</h1></div>
                                <div className="app-name-p">
                                    <p>Age: {elem.petAge}</p>
                                    <p>Color: {elem.color}</p>
                                    <p>Gender: {elem.petGender}</p>
                                    {elem.status === "Applied" && <p>Status: <span className="applied">Applied</span> <div className="app-stat"></div></p>}
                                    {elem.status === "Reject" && <p>Status: <span className="rejected">Rejected</span> ❌</p>}
                                    {elem.status === "Accept" && <p>Status: <span className="applied">Accepted</span> ✅</p>}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </main>
        </div>
    );
}

export default MyApplication;

