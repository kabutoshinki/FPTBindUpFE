import React from "react";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/1000/600/",
    sizes: "600x400",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/1000/600/",
    sizes: "600x400",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/1000/600/",
    sizes: "600x400",
  },
];

export const ProjectDesc = ({ rating, data }) => {
  // console.log("Image:", data?.data?.images);
  const arr = data?.data?.images;
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
          <button
            type="button"
            className="py-2 px-4 mb-[10pt] mr-[10pt] text-sm font-normal text-gray-900 bg-white rounded-full border border-gray-200 hover:border-blue-400 hover:text-blue-700 "
          >
            Design Tools
          </button>
          <button
            type="button"
            className="py-2 px-4 mb-[10pt] mr-[10pt] text-sm font-normal text-gray-900 bg-white rounded-full border border-gray-200 hover:border-blue-400 hover:text-blue-700 "
          >
            No-Code
          </button>
          <button
            type="button"
            className="py-2 px-4 mb-[10pt] mr-[10pt] text-sm font-normal text-gray-900 bg-white rounded-full border border-gray-200 hover:border-blue-400 hover:text-blue-700 "
          >
            Graphic Design
          </button>
          <button
            type="button"
            className="py-2 px-4 mb-[10pt] mr-[10pt] text-sm font-normal text-gray-900 bg-white rounded-full border border-gray-200 hover:border-blue-400 hover:text-blue-700 "
          >
            Web Design
          </button>
        </div>
      </div>
      <div className="mt-[30pt]">
        <h3 className="font-[500] text-slate-700 mb-[15px]">Mentors</h3>
        <div className="my-[10px] flex justify-start flex-wrap">
          <div className="flex items-center space-x-4">
            <img className="w-10 h-10 rounded-full" src="../../assets/user_avatar/ava_1.jpg" onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "/no_img.png";
            }}
              alt="" />
            <div className="font-medium ">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500">Lecturer at FPTU</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDesc;
