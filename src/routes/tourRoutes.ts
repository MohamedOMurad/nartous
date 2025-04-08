import express from 'express';
import { getAllTours } from '../controllers/tourController';

const tourRouter = express.Router();

// router.param('id', tourController.checkID);

tourRouter.route('/').get(getAllTours);
// .post(tourController.checkBody, tourController.createTour);

// router
//   .route('/:id')
//   .get(tourController.getTour)
//   .patch(tourController.updateTour)
//   .delete(tourController.deleteTour);

export default tourRouter;
