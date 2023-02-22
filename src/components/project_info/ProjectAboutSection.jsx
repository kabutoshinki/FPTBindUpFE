import React, { useState } from "react";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },

];


export const ProjectDesc = ({ rating }) => {
    return (
        <>
            <ImageGallery items={images} />

            <p>WebWave is the only freehand, true drag and drop website builder. You have freedom to position elements anywhere on the canvas and work with layers. Like in Figma.
            </p>
            <div className="mt-[20px] grid gap-4 grid-cols-4 grid-rows-8">
                <p className="col-span-1 font-medium">Website</p>
                <p className="col-span-3">webwave.me</p>

                <p className="col-span-1 font-medium">Makers</p>
                <p className="col-span-3">Ewelina Wróbel, Monika Buchelt, Maciej Czajkowski, Janusz Mirowski</p>

                <p className="col-span-1 font-medium">Pricing</p>
                <p className="col-span-3">This product requires payment but also offers a free trial or version</p>

                <p className="col-span-1 font-medium">Platforms</p>
                <p className="col-span-3">Web</p>

            </div>
            <div className="mt-[30pt]">
                <h3 className="font-[500] text-slate-700">Related topics</h3>
                <div className="my-[10px] flex justify-start flex-wrap">
                    <button type="button" className="py-2 px-4 mb-[10pt] mr-[10pt] text-sm font-normal text-gray-900 bg-white rounded-full border border-gray-200 hover:border-blue-400 hover:text-blue-700 ">Design Tools</button>
                    <button type="button" className="py-2 px-4 mb-[10pt] mr-[10pt] text-sm font-normal text-gray-900 bg-white rounded-full border border-gray-200 hover:border-blue-400 hover:text-blue-700 ">Website Builder</button>
                    <button type="button" className="py-2 px-4 mb-[10pt] mr-[10pt] text-sm font-normal text-gray-900 bg-white rounded-full border border-gray-200 hover:border-blue-400 hover:text-blue-700 ">No-Code</button>
                    <button type="button" className="py-2 px-4 mb-[10pt] mr-[10pt] text-sm font-normal text-gray-900 bg-white rounded-full border border-gray-200 hover:border-blue-400 hover:text-blue-700 ">Graphic Design</button>
                    <button type="button" className="py-2 px-4 mb-[10pt] mr-[10pt] text-sm font-normal text-gray-900 bg-white rounded-full border border-gray-200 hover:border-blue-400 hover:text-blue-700 ">Web Design</button>
                </div>
            </div>
        </>
    );
};

export default ProjectDesc;