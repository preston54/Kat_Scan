import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Home({data}) {

    const router = useRouter();
    const [uname, setUname] = useState("");
    const { user } = router.query;

    useEffect(() => {
        data?.map(function (item){
            if(item.UserName == user){
                setUname(item.FirstName);
                console.log(item.FirstName);
            }
        });

    }), [];

  return (
    <div>
      {uname}
    </div>
  )
}

export async function getServerSideProps(){

    const url = "http://localhost:3000/api/getdata-lib";
    const res = await fetch(url);
    const data = await res.json();
    return { props: {data} };
}