import { ApiReturn } from '@shared/interfaces/utils/api.interface';
import ApiVehicle from '@shared/api/vehicle/vehicle.api';
import store from '~/store/store';

class ApiVehicleHandler {
    static async getVehicles(): Promise<ApiReturn> {
        const state = store.getState();
        const token = state.auth.token;

        if (!token) {
            return {
                data: null,
                error: 'Token is missing.',
                isLoading: false,
            };
        }

        const { data, error, isLoading } =
            await ApiVehicle.getAllVehicles(token);

        return { data, error, isLoading };
    }
}

export default ApiVehicleHandler;