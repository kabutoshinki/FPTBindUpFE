import React from "react";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

export const ProjectDesc = ({ rating, data }) => {
  // console.log("Image:", data?.data?.images);
  const arr = data?.data?.images;
  console.log(data);
  let imagesArr = [];
  if (arr) {
    console.log("url", arr);
    arr.forEach(element => {
      if (element) {
        console.log("el: ", element.directory);
        imagesArr.push({
          "original": element.directory,
          "thumbnail": element.directory,
          "originalHeight": 400,
          "originalWidth": 600,
        })
      }
    });
  }
  return (
    <>

      {arr && <ImageGallery items={imagesArr} />}
      <div className="mt-[30px]">
        <h3 className="font-[500] text-slate-700 mb-[20px]">Description</h3>
      </div>
      <div className="" dangerouslySetInnerHTML={{ __html: data.data?.description }} />
      <div className="mt-[20px] grid gap-4 grid-cols-4 grid-rows-8">
        {/* <p className="col-span-1 font-medium">Website</p>
        <p className="col-span-3">{data.data?.name}</p> */}

        {/* <p className="col-span-1 font-medium">Makers</p>
        <p className="col-span-3">Ewelina Wróbel, Monika Buchelt, Maciej Czajkowski, Janusz Mirowski</p> */}

        {/* <p className="col-span-1 font-medium">Pricing</p>
        <p className="col-span-3">This product requires payment but also offers a free trial or version</p> */}

        {/* <p className="col-span-1 font-medium">Platforms</p>
        <p className="col-span-3">Web</p> */}
      </div>
      <div className="mt-[30pt]">
        <h3 className="font-[500] text-slate-700">Related topics</h3>
        <div className="my-[10px] flex justify-start flex-wrap">
          {data?.data?.topics.map((item, index) => (
            <Link
              to={`/topic/${item.id}/projects`}
              key={index}
              type="button"
              className="py-2 px-4 mb-[10pt] mr-[10pt] text-sm font-normal text-gray-900 bg-white rounded-full border border-gray-200 hover:border-blue-400 hover:text-blue-700 "
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-[30pt]">
        <h3 className="font-[500] text-slate-700 mb-[15px]">Mentors</h3>
        <div className="my-[10px] grid grid-cols-3 gap-x-5 gap-y-7">
          {data?.data?.mentors.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img className="w-8 h-8 rounded-full" src="../../assets/user_avatar/ava_1.jpg" onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "/empty_user.png";
              }}
                alt="" />
              <div >
                <div className="font-medium">{item.name}</div>
                <div className="text-[0.7rem] text-slate-500">{item.major}</div>
                <div className="text-[0.7rem] text-slate-500">{item.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectDesc;
