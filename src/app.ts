import { createExpressServer } from 'routing-controllers';
import { UserController } from './controllers/user.controller';

const app = createExpressServer({
    controllers: [UserController]
});

app.listen(process.env.port || 8080, () => {
    console.log('Server Running')
});