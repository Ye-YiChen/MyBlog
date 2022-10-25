import Mock from 'mockjs';
import institution from './data/institution';  // 机构列表

Mock.mock('/institution/list', 'get' ,institution.getList); // 查
Mock.mock('/institution/create', 'post' ,institution.create); // 增

export default Mock