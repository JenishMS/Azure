import { Get, JsonController } from "routing-controllers";

@JsonController('')
export class UserController {

    @Get('/')
    getAll() {
        return 'Hello You! Welcome';
    }
}