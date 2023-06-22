import React from 'react'
import { useRouter } from 'next/router';

    // const router = useRouter();
function CourseId() {
    const router = useRouter();
    const { id } = router.query;



  return (
    <div>

<h1>ID: {id}</h1>
    </div>
  )
}

export default CourseId