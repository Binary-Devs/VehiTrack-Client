import * as yup from 'yup';

export const maintenanceSchema = yup.object().shape({
  date: yup.date().required('Date is required'),
  vehicleId: yup.string().required('Vehicle ID is required'),
  driverId: yup.string(),
  odoMeter: yup.number().required('Odometer is required').integer(),
  workshopType: yup.string().required('Workshop Type is required'),
  maintenanceType: yup.string().required('Maintenance Type is required'),
  workshopDetails: yup.string(),
  serviceCharge: yup.number().integer(),
  remarks: yup.string(),
  maintenanceHeadId: yup.string().required('Maintenance Head is required'),
  equipmentUses: yup.array().of(
    yup.object({
      equipmentId: yup.string().required('Equipment ID is required'),
      quantity: yup.number().required('Quantity is required').integer(),
      remarks: yup.string(),
    })
  ),
});
