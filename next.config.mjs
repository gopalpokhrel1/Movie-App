/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        Api_Key:process.env.Api_Key
    },
    images:{
         domains:['image.tmdb.org']
    }
};

export default nextConfig;
