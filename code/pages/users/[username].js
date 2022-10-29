import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();
  const {username} = router.query;
  const [dataresp, setdataresp] = useState([]);

  useEffect(() => {


    async function getpagedata() {

      const apiUrlEndpoint = 'http://localhost:3000/api/getdata-lib';

      const postData = {

        method: "Post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username: username,
        }),

      };

      const response = await fetch(apiUrlEndpoint, postData);

      const res = await response.json();

      console.log(res.results);
      setdataresp(res.results);
    }

    getpagedata();

  }, [router.query.username, router.isReady]) 
  return (
    <div>
      {dataresp?.map((results) => results.FirstName)}
    </div>
  )
}
