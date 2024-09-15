export const PublishJobs = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    const res = await fetch(`${baseUrl}/api/v1/jobs`, { cache: 'no-store' });
    const data = await res.json();
    const publishJobs = data?.result?.filter(job => job?.publishStatus === 'published') || [];
    return JSON.parse(JSON.stringify(publishJobs));
};

export const DarftJobs = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
    const res = await fetch(`${baseUrl}/api/v1/jobs`, { cache: 'no-store' });
    const data = await res.json();
    const darftJobs = data?.result?.filter(job => job?.publishStatus === 'draft') || [];    
    
    return JSON.parse(JSON.stringify(darftJobs));
};
  