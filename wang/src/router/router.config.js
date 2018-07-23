import Loadable from 'react-loadable';
import Loading from '../component/common/loading';

const Home = Loadable({
    loader: () => import('../component/Home'),
    loading: Loading,
})
// 首页页面
const HomeIndex = Loadable({
    loader: () => import('../component/Home/Menu'),
    loading: Loading,
})
// 住房管理
const Plant = Loadable({
    loader: () => import('../component/Home/Menu/management/plant'),
    loading: Loading,
})
// 厂房管理
const Residence = Loadable({
    loader: () => import('../component/Home/Menu/management/residence'),
    loading: Loading,
})
// 人员管理
const Personnel = Loadable({
    loader: () => import('../component/Home/Menu/system/personnel'),
    loading: Loading,
})
// 公司管理
const Company = Loadable({
    loader: () => import('../component/Home/Menu/system/company'),
    loading: Loading,
})
// 添加公司信息
const personnelInfo = Loadable({
    loader: () => import('../component/Home/Menu/system/company/compileInfo'),
    loading: Loading,
})
// 编辑公司信息
const personnelEdit = Loadable({
    loader: () => import('../component/Home/Menu/system/company/compileEdit'),
    loading: Loading,
})
// 操作日志
const Operation = Loadable({
    loader: () => import('../component/Home/Menu/system/operation'),
    loading: Loading,
})
// 查看人员信息
const PersonnelDetail = Loadable({
    loader: () => import('../component/Home/Menu/system/personnel/detail'),
    loading: Loading,
})
// 编辑人员信息
const personnelCompile = Loadable({
    loader: () => import('../component/Home/Menu/system/personnel/compile'),
    loading: Loading,
})

const router = {
    routes: [{
        path: '/home',
        component: Home,
        children: [{
            path: '/home/index',
            component: HomeIndex,
        }, {
            path: '/home/residence',
            component: Plant,
        }, {
            path: '/home/plant',
            component: Residence,
        }, {
            path: '/home/personnel',
            component: Personnel,
        }, {
            path: '/home/company',
            component: Company,
        }, {
            path: '/home/edit',
            component: personnelEdit,
        }, {
            path: '/home/info',
            component: personnelInfo,
        }, {
            path: '/home/operation',
            component: Operation,
        }, {
            path: '/home/personnelDetail',
            component: PersonnelDetail,
        }, {
            path: '/home/personnelCompile',
            component: personnelCompile,
        }]
    }]
};
export default router;