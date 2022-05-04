import dbConnect from '../../../utils/dbConnect.js';
import Device from '../../../models/Device'

dbConnect()



export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const device = await Device.findById(id);

                if (!device) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: device });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const device = await Device.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!device) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: device });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedDevice = await Device.deleteOne({ _id: id });

                if (!deletedDevice) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}