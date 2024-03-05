import React from "react";

type setMenu = {
    setMenu: any
}
const Menubar = (props:setMenu)=>{

    var medubarItem = ['Home','For you','Following','News showcases','Nepal','World','Sports','Sports1','Sports2','Sports3','Sports4','Sports5','Sports6','Sports7'];

    return (
        <div className="flex items-center shadow-sm pt-4 p-3 w-screen bg-white">
        {medubarItem.map((item, index) => (
                <React.Fragment key={index}>
                    <h1 onClick={()=>props.setMenu(item)} className="ml-7 font-medium text-gray-500 text-base hover:text-black cursor-pointer">{item}</h1>
                    {index === 4 && <h1 className="ml-7 font-medium text-gray-200">|</h1>}
                </React.Fragment>
            ))}
    </div> 
        
    )
}
export default Menubar