const Dashboard = () => {
    return (
        <div>
            <div className="scaledwidth">
                <div className="topBar ">
                    <div className="leftSide w-4/5 inline-block border-r-4 border-slate-400">
                        <div className="text-center text-4xl py-5 text-slate-400">
                            Sales Activity
                        </div>
                        <vl/>
                        <div className=" flex justify-around text-center w-2/3 m-auto">
                            <div className="p-6 border-4 border-indigo-500/75 rounded-lg">
                                <div>To Be Delivered</div>
                                <div>580 item</div>
                            </div>
                            <div className="p-6 border-4 border-indigo-500/75 rounded-lg">
                                <div>Receiving Items</div>
                                <div>580 item</div>
                            </div>
                            <div className="p-6 border-4 border-indigo-500/75 rounded-lg">
                                <div>Pending Packing</div>
                                <div>580 item</div>
                            </div>
                        </div>
                    </div>
                    <div className="rightSide w-1/5 inline-block text-center">
                        <div>
                            Quantity Summary
                        </div>
                        <div className="my-5">
                            <div className="py-2">Quantity in hand : </div>
                            <div className="py-2">Quantity to be received : </div>
                        </div>
                    </div>
                </div>
                <div className="my-3" style ={{width: "100%", height: "4px", marginLeft: "auto", marginRight: "auto", backgroundColor: "#b7d0e2",}}>
                    <hr/>
                </div>
                <div className="flex justify-around">
                    <div className="border-4">
                        <div>
                            Product Details
                        </div>
                        <div>
                            <div>
                                <div>Low Stock</div>
                                <div>580 item</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-4">
                        <div>Top Selling Items</div>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;