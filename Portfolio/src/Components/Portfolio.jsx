import React, {useRef} from 'react';
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const Portfolio = () =>
    {

        const ref=useRef()


        const {scrollYProgress} = useScroll({target:ref,
        offset:["end end" ,"start start"],
        });

        const items=[
            {
                id:1,
                title:'Portfolio1',
                des:'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
                img:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1060&t=st=1701002285~exp=1701002885~hmac=a5b06072244fbe4fc82485324f254b258780ff9c29f4b075520f58ba0e5a7cb8',
            },
            {
                id: 2,
                title: 'Portfolio2',
                des: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
                img: 'https://img.freepik.com/free-photo/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai_188544-9869.jpg?size=626&ext=jpg&ga=GA1.1.582566703.1700072675&semt=ais',
            },
            {
                id:3,
                title:'Portfolio3',
                des:'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
                img: 'https://img.freepik.com/free-photo/natures-beauty-reflected-tranquil-mountain-waters-generative-ai_188544-7867.jpg?size=626&ext=jpg&ga=GA1.1.582566703.1700072675&semt=ais',
            },
            {
                id:4,
                title:'Portfolio4',
                des:'lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
                img: 'https://img.freepik.com/free-photo/autumn-season-leafs-plant-scene-generative-ai_188544-7971.jpg?w=996&t=st=1701002495~exp=1701003095~hmac=6dd74455c499982ac208b25d2150260ca63afa56df16d6cb333b03eada0443ef',
            }


        ];


        const Single =({item})=>
        {
                    const isMobile= window.innerWidth < 768 ? true:false;
                    const ref=useRef()
                    const {scrollYProgress} = useScroll({target:ref,}
                        );
                    const y = useTransform(scrollYProgress,[0 , 1] ,[-300, 300 ]);

                    return(
                        <section >
                            <div className="container flex  justify-center items-center w-full h-full overflow-hidden ">
                                <div className="wrapper flex  lg:max-w-[1366px] m-auto items-center flex-col lg:flex-row
                                 justify-center h-full gap-[25px] lg:gap-[50px]">
                                    <motion.div className="image-container flex items-center justify-center lg:flex-[1_1_0%]  lg:h-1/2 " ref={ref} >
                                        <img className="w-full h-full object-contain lg:object-cover" src={item.img} alt={item.title} />
                                    </motion.div>
                                    <motion.div  className="text-container flex lg:flex-[1_1_0%] items-center  flex-col gap-[50px] "  style={!isMobile && {y}} >
                                            <h2 className="text-3xl lg:text-6xl">{item.title}</h2>
                                            <p className="text-gray-200   text-center text-2xl">{item.des}</p>
                                            <button className="w-[200px] p-[10px] text-black self-center cursor-pointer bg-yellow-600 rounded-full">See Demo</button>
                                    </motion.div>
                                </div>
                          </div>
                        </section>
                        )
        }

        const scaleX = useSpring(scrollYProgress,
            {
             stiffness:100,
                damping:30,
            });

        return(
            <div className="portfolio relative bg-[#0c0c1d]"  ref={ref}>
                <div className="ProgressBar  text-center sticky text-yellow-600
                top-0 left-0 pt-[calc(100vh-100px)] lg:pt-[50px] overflow-hidden">
                    <h1 className="text-3xl lg:text-6xl">Feature works</h1>
                    <motion.div style={{scaleX:scaleX}} className="progressBar h-[10px] bg-white lg:mt-4"></motion.div>
                </div>
                <div className="text-white">
                    {
                     items.map((item)=>(
                         <Single item={item} key={item.id}></Single>
                     ))
                    }

                </div>
            </div>
        );
    };

export default Portfolio;