import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class QuanLyKhoaHocService extends baseService{
    constructor(){
        super();
    }

    layDanhSachKhoaHoc = (tenKhoaHoc= '') => {
        if(tenKhoaHoc !== ''){
             return this.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${GROUPID}`)
        }else{
            return this.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUPID}`)
        }
        
    }
    layDanhMucKhoaHoc = () => {
        return this.get(`/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`)
    }
    layKhoaHocTheoDanhMuc = (maDanhMuc) => {
        return this.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${GROUPID}`)
    }
    layThongTinKhoaHoc = (makhoahoc) => {
        return this.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${makhoahoc}`)
    }
    dangKyKhoaHoc = (thongTinDangKy) => {
        return this.post(`/api/QuanLyKhoaHoc/DangKyKhoaHoc`,thongTinDangKy)
    }
    huyKhoaHoc = (thongTinHuyDangKy) => {
        return this.post(`/api/QuanLyKhoaHoc/HuyGhiDanh`,thongTinHuyDangKy)
    }
    themKhoaHoc = (thongTinKhoaHoc) => {
        return this.post(`/api/QuanLyKhoaHoc/ThemKhoaHoc`,thongTinKhoaHoc)
    }
    xoaKhoaHoc = (maKhoaHoc) => {
        return this.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`)
    } 
    themKhoaHocUploadHinh = (frm) => {
        return this.post(`/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc`,frm)
    }
    ghiDanhKhoaHoc = (thongTinXacThuc) => {
        return this.post(`/api/QuanLyKhoaHoc/GhiDanhKhoaHoc`,thongTinXacThuc)
    }
    huyGhiDanh = (thongTinHuy) => {
        return this.post(`/api/QuanLyKhoaHoc/HuyGhiDanh`,thongTinHuy)
    }



}

export const quanLyKhoaHocSerVice = new QuanLyKhoaHocService

