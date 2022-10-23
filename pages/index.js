import Head from 'next/head';
import React from 'react';
import { Fragment, useEffect, useState } from "react";
import { getToken, getPreview, getParentRefDetails } from "../utils/getPreview";
import Footer from "../components/Footer";
import Video from "../components/Video";
import AudioWithWave from "../components/AudioWithWave";
import Profile from "../components/Profile";
import SocialSection from "../components/SocialSection";
import OnlyAudio from "../components/OnlyAudio";
import dynamic from "next/dynamic";
import OnlyText from "../components/OnlyText";
import Text from "../components/Text";
import ImageComp from "../components/ImageComp";
import AudioWithVideo from "../components/AudioWithVideo";
import { useRouter } from "next/router";
import { isAndroid, isIOS } from "react-device-detect";
import { checkTypes } from "../utils/checkTypes";
import Rehuut from "../components/Rehuut";
import ShareModal from "../components/ShareModel";

const Home=({resData})=> {
//   const [status, setStatus] = useState("loading....");
//   const [data, setData] = useState();
//   const [type, setType] = useState();
//   const [hoote, setHoote] = useState();
//   const [file, setFile] = useState();
//   const [text, setText] = useState();
//   const [showRehuut, setShowReHuut] = useState(false);
//   const [hootType, setHootType] = useState("s");
//   const [richLink, setRichLink] = useState(false);
//   const [rehuut, setRehuut] = useState();
//   const [open, setOpen] = useState(false);
//   const [parentRefData, setParentRefData] = useState();
//   const [showParentProfile, setShowParentProfile] = useState(false)
//   const [targetUser, setTargetUser] = useState()
//   if (Object.keys(resData).length === 0 || !resData) {
//     setStatus("Sorry!! Hoote is not available");
//   }
//   const [deviceType, setDeviceType] = useState("");
//   const handleModal = () => {
//     setOpen(!open);
//   };

//   useEffect(() => {
//     if (isAndroid) {
//       setDeviceType("android");
//     } else if (isIOS) {
//       setDeviceType("apple");
//     }
//   }, []);
// //   const envir = process.env.NEXT_PUBLIC_WEB_PREVIEW_URL
// //  console.log("get uesr api", {envir, hooteTokenApi, hooteApi, userApi, webPreviewUrl})

//   const router = useRouter();
//   const { huut } = router.query;
//   //console.log("router", router)
//   const canonicalUrl = (`https://web.huut.com/preview` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

//   //console.log("canonicalUrl", canonicalUrl)
//   // console.log("query",huut)

//   // console.log("resData", resData)
//   useEffect(() => {
//     if (resData) {
//       setData(resData);
//     }
//   }, [resData]);

//   useEffect(() => {
//     if (data) {
//       setHoote(resData?.hoote);
//     }
//   }, [data, resData?.hoote]);
  
//   console.log("resData", resData);

//   useEffect(() => {
//     if (hoote) {
//       const finalType = checkTypes(hoote);
//       setType(finalType);
//       setFile(hoote.files);
//       setText(hoote.text);
//     }
//   }, [hoote]);

//   const callParentHuut = async (parentId) => {
//     const finalToken = await getToken();
//     //console.log("finalToken", finalToken)
//     const res = await getPreview(parentId, finalToken);
//     const json = await res.json();
//     const parentData = await json?.data;
//     setRehuut(parentData);
//     // console.log("parentData", parentData)
//   };

//   const callParentRefDetails = async (parentId) => {
//     const finalToken = await getToken();
//     // console.log("finalToken", finalToken)
//     const res = await getParentRefDetails(parentId, finalToken);
//     const json = await res.json();
//     const parentRefDataRes = await json?.data;
//     setParentRefData(parentRefDataRes);
//   };
//   const callTargetUser = async (parentId) => {
//     const finalToken = await getToken();
//     // console.log("finalToken", finalToken)
//     const res = await getParentRefDetails(parentId, finalToken);
//     const json = await res.json();
//     const parentRefDataRes = await json?.data;
//     setTargetUser(parentRefDataRes);
//   };


//   useEffect(() => {
//     if (hoote) {
//       if (hoote.type === "REHOOTE_QUOTE" || hoote.type === "RAH_REQ" || hoote.type == "RAH_RESP") {
//         if(hoote?.parentHooteId){
//         callParentHuut(hoote?.parentHooteId);
//         setShowReHuut(true);
//         setHootType(hoote.type);
//         }
//         if (hoote.type === "RAH_REQ" || hoote.type == "RAH_RESP") {
//           if(hoote?.parentHooteId){
//             setShowParentProfile(true)
//           }
//         }
        
//       }
//     }
//   }, [hoote]);

//   useEffect(() => {
//     if (hoote) {
//       if (hoote?.parentRef) {
//         callParentRefDetails(hoote?.parentRef?.user_id);
//         //  callParentHuut(hoote?.parentHooteId)
//         //  setShowReHuut(true)
//         //  setHootType(hoote.type)
//       }
//     }
//   }, [hoote]);
//   useEffect(() => {
//     if (hoote) {
//       if (hoote?.rahRef) {
//         if(hoote?.rahRef?.targetUser){
//           callTargetUser(hoote?.rahRef?.targetUser);
//         //  callParentHuut(hoote?.parentHooteId)
//         //  setShowReHuut(true)
//         //  setHootType(hoote.type)
//       }
//     }
//     }
//   }, [hoote]);
// // console.log("targetUser", targetUser)
  

//   function FinalComponent({ type, file, text, deviceType }) {
//     switch (type) {
//       case "audio":
//         return (
//           <Fragment>
//             <AudioWithWave file={file} />
//           </Fragment>
//         );
//       case "video":
//         return (
//           <Fragment>
//             <Video file={file} />
//           </Fragment>
//         );
//       case "img":
//         return (
//           <Fragment>
//             <ImageComp file={file} />
//           </Fragment>
//         );
//       case "text":
//         return (
//           <Fragment>
//             <OnlyText
//               text={text}
//               deviceType={deviceType}
//               setRichLink={setRichLink}
//               hoote={hoote}
//             />
//           </Fragment>
//         );
//       case "audio_text":
//         return (
//           <Fragment>
//             <OnlyAudio file={file} />
//             <OnlyText
//               text={text}
//               bg="black"
//               deviceType={deviceType}
//               hoote={hoote}
//               setRichLink={setRichLink}
//             />
//           </Fragment>
//         );
//       case "img_text":
//         return (
//           <Fragment>
//             <ImageComp file={file} />
//             <Text text={text} deviceType={deviceType} imgText="true" />
//           </Fragment>
//         );
//       case "video_text":
//         return (
//           <Fragment>
//             <Video file={file} />
//             <Text text={text} deviceType={deviceType} />
//           </Fragment>
//         );
//       case "audio_video":
//         return (
//           <Fragment>
//             <AudioWithVideo file={file} />
//           </Fragment>
//         );
//       case "audio_video_text":
//         return (
//           <Fragment>
//             <AudioWithVideo file={file} />
//             <Text text={text} deviceType={deviceType} />
//           </Fragment>
//         );
//       case "audio_img":
//         return (
//           <Fragment>
//             <OnlyAudio file={file} />
//             <ImageComp file={file} />
//           </Fragment>
//         );
//       case "audio_img_text":
//         return (
//           <Fragment>
//             <OnlyAudio file={file} />
//             <ImageComp file={file} />
//             <Text text={text} deviceType={deviceType} imgText="true" />
//           </Fragment>
//         );
//       default:
//         return <h1>Invalid Input</h1>;
//     }
//   }
//   return (
  return(
    <div>
      <Head>
        <title>Social Media Preview</title>
        <meta property="og:url" content="https://team-place.com/" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="2747726002141483" />
        <meta property="og:title" content={resData?.user?.firstname} />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Hurray!! Yes Social Media Preview is Working"
        />
        <meta property="og:image" content={resData?.hoote?.files[0]?.thumbnail} />
      </Head>
      
    </div>
  );
}
export default Home

export const getServerSideProps = async (ctx) => {
  const { huut } = ctx.query;
  const finalToken = await getToken();
  const res = await getPreview(huut, finalToken);
  const json = await res.json();
  const resData=  json.data
 

  return {
    props: {
      resData
    },
  };
};
