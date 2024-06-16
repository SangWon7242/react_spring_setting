import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
   const [hello, setHello] = useState('')
   const [no, setNo] = useState('')

    useEffect(() => {
        axios.get('/usr/*')
        .then(response => setHello(response.data))
        .then(response => setNo(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            백엔드에서 가져온 데이터입니다 : {no}
        </div>
    );
}

export default App;