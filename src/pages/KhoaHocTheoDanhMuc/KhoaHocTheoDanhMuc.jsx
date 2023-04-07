import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { layKhoaHocTheoDanhMucAction } from '../../redux/actions/QuanLyKhoaHocAction'

const KhoaHocTheoDanhMuc = () => {
    const dispatch = useDispatch()
    const { madanhmuc } = useParams()
    const { arrKhoaHocTheoDanhMuc } = useSelector(state => state.QuanLyKhoaHocReducer)
    console.log("arrKhoaHocTheoDanhMuc: ", arrKhoaHocTheoDanhMuc);
    console.log("maDanhMuc: ", madanhmuc);
    useEffect(() => {
        dispatch(layKhoaHocTheoDanhMucAction(madanhmuc))
    }, [madanhmuc])

    return (
        <section className="py-6 bg-retro-beige ">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase"></p>
                <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl text-retro-red">Các Khóa Học Phổ Biến</h1>
                <div className="flex flex-row flex-wrap justify-center mt-8 gap-5">

                        {
                            arrKhoaHocTheoDanhMuc?.slice(0, 9).map((khoaHoc, index) => {
                                return <div key={index} className="my-4 mx-2 w-full bg-white shadow-md border border-gray-200 rounded-lg max-w-sm ">
                                    <div className=' w-full h-60'>
                                        <img className="rounded-t-lg h-full w-full min-w-100" src={khoaHoc.hinhAnh} alt />
                                    </div>

                                    <div className="p-5 w-full ">
                                        <a href="#">
                                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{khoaHoc.tenKhoaHoc}</h5>
                                        </a>
                                        <p className="font-normal text-retro-primary mb-3 dark:text-gray-400 h-24 ">{khoaHoc.moTa.length > 150 ? khoaHoc.moTa.substring(0, 150) + '...' : khoaHoc.moTa}</p>
                                        <NavLink className="text-retro-beige bg-retro-third hover:bg-retro-second focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center   hover:text-retro-beige dark:focus:ring-blue-800" to={`/chitiet/${khoaHoc.maKhoaHoc}`}>
                                            Đăng ký
                                            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                        </NavLink>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
        </section>
    )
}

export default KhoaHocTheoDanhMuc