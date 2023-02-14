import { Admin, Resource } from 'react-admin';

import { ProductList } from './product/product-list';

import { UserList } from './user/user-detail';
import { UserEdit } from './user/user-edit';

import { CustomerList } from './customer/customer-list';
import { CustomerEdit } from './customer/customer-edit';

import { OrderList } from './order/order-list';

import { Dashboard } from './dashboard/dashboard';
import { dataProvider } from './data-provider';


import { ReviewList } from './review/review-list';
import { ReviewShow } from './review/review-show';


const App = () => (
    <Admin dataProvider={dataProvider} dashboard={Dashboard}>
        
        <Resource
            name="products"
            list={ProductList}
            recordRepresentation="name"
        />
        <Resource
            name="users"
            list={UserList}
            edit={UserEdit}
            recordRepresentation="userName"
        />
        <Resource
            name="customers"
            list={CustomerList}
            edit={CustomerEdit}
            recordRepresentation="name"
        />
        <Resource
            name="orders"
            list={OrderList}
            recordRepresentation={(record) => `${record.id}`}
        />
        <Resource
            name="reviews"
            list={ReviewList}
            show={ReviewShow}
            recordRepresentation="stars"
        />
    </Admin>
);

export default App;
