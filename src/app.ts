import { createExpressServer } from 'routing-controllers';
import { UserController } from './controllers/user.controller';

const app = createExpressServer({
    controllers: [UserController]
});

app.listen(3000, () => {
    console.log('Server Running')
});