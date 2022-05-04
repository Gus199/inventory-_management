import dbConnect from '../../../utils/dbConnect.js';
import Device from '../../../models/Device'

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const devices = await Device.find({});

                res.status(200).json({ success: true, data: devices })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const device = await Device.create(req.body);

                res.status(201).json({ success: true, data: device })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}