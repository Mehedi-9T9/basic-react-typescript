import React from 'react';
type statusDemo = {
    status: "loading" | "error" | "success"
}

const Fetchdata = ({ status }: statusDemo) => {
    if (status === "loading") {
        return <h2>Data is loading</h2>
    } else if (status === "error") {
        return <h2>Data fetch error</h2>
    }
    return (
        <div>
            <h2>Data load successfull</h2>


        </div>
    );
};

export default Fetchdata;