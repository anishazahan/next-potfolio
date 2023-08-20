import React from 'react'
import { useRouter } from 'next/router'
import { useSingleProjectQuery } from '@/Redux/features/projectApi';

const ProjectDetails = () => {
    const router = useRouter()
    const projectId = router.query.id;
    const { data, isLoading, isError, error } = useSingleProjectQuery(projectId); 
    console.log(data?.data.name);
  return (
    <div>ProductDetails = {projectId}</div>
  )
}

export default ProjectDetails