import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';

const DangNhap = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({

        initialValues: {
          taiKhoan: '',
          matKhau: '',
        },
        onSubmit: value => {
          dispatch(dangNhapAction(value ,navigate))
          console.log("value: ", value);
          // alert(JSON.stringify(value, null,2));
        },
      });




    return (
        <div className="bg-retro-second h-screen w-screen">
            <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
                <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style={{ height: 500 }}>
                    <div className="flex flex-col w-full md:w-1/2 p-4">
                        <div className="flex flex-col flex-1 justify-center mb-8">
                            <h1 className="text-4xl text-center font-thin">Xin chào!</h1>
                            <div className="w-full mt-4">
                                <form onSubmit={formik.handleSubmit} noValidate className="form-horizontal w-3/4 mx-auto">
                                    <div className="flex flex-col mt-4">
                                        <input type="text" className="flex-grow h-8 px-2 border rounded border-grey-400" name="taiKhoan"  placeholder="Tài khoản" onChange={formik.handleChange} />
                                    </div>
                                    <div className="flex flex-col mt-4">
                                        <input id="password" type="password" className="flex-grow h-8 px-2 rounded border border-grey-400" name="matKhau" required placeholder="Mật khẩu" onChange={formik.handleChange} />
                                    </div>
                                    
                                    <div className="flex flex-col mt-8">
                                        <button className="bg-yellow-500 text-gray-100 p-4 w-full text-center rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-yellow-600
                          shadow-lg ">
                                            Đăng Nhập
                                        </button>
                                    </div>
                                </form>
                                <div className="text-center mt-4">

                                    <div>
                                        <a className="no-underline hover:underline text-blue-dark text-xs" href="{{ route('password.request') }}">
                                            Quên mật khẩu?
                                        </a>
                                    </div>
                                    <div>
                                        <NavLink className="no-underline hover:underline text-blue-dark text-xs" to="/dangky">
                                            Bạn chưa có tài khoản? Đăng ký!
                                        </NavLink>
                                    </div>
                                    <ButtonBack></ButtonBack>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:w-1/2 rounded-r-lg" style={{ background: 'url("https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80")', backgroundSize: 'cover', backgroundPosition: 'center center' }} />
                </div>
            </div>
        </div>

    )
}

export default DangNhap