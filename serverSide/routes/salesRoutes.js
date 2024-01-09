const express = require('express');
const Sales = require('../models/SalesModel');

const router = express.Router();

// GET total revenue
router.get('/total-revenue', async (req, res) => {
  try {
    const totalRevenue = await Sales.aggregate([
      {
        $group: {
          _id: null,
          total: {
            $sum: { $multiply: ['$quantity', '$price'] }
          }
        }
      }
    ]);

    res.json({ totalRevenue: totalRevenue[0].total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/quantity-by-product', async (req, res) => {
  try {
    const quantityByProduct = await Sales.aggregate([
      {
        $group: {
          _id: '$product',
          totalQuantity: { $sum: '$quantity' }
        }
      }
    ]);

    res.json(quantityByProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET top products by total revenue
router.get('/top-products', async (req, res) => {
  try {
    const topProducts = await Sales.aggregate([
      {
        $group: {
          _id: '$product',
          totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } }
        }
      },
      {
        $sort: { totalRevenue: -1 }
      },
      {
        $limit: 5
      }
    ]);

    res.json(topProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET average price
router.get('/average-price', async (req, res) => {
  try {
    const averagePrice = await Sales.aggregate([
      {
        $group: {
          _id: null,
          averagePrice: { $avg: '$price' }
        }
      }
    ]);

    res.json({ averagePrice: averagePrice[0].averagePrice });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET revenue by month
router.get('/revenue-by-month', async (req, res) => {
  try {
    const revenueByMonth = await Sales.aggregate([
      {
        $group: {
          _id: {
            year: { $year: '$date' },
            month: { $month: '$date' }
          },
          totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } }
        }
      },
      {
        $project: {
          _id: 0,
          year: '$_id.year',
          month: '$_id.month',
          totalRevenue: 1
        }
      },
      {
        $sort: { year: 1, month: 1 }
      }
    ]);

    res.json(revenueByMonth);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET product with highest quantity sold on a single day

router.get('/highest-quantity-sold', async (req, res) => {
  try {
    const highestQuantitySold = await Sales.aggregate([
      {
        $group: {
          _id: { date: '$date', product: '$product' },
          totalQuantity: { $sum: '$quantity' }
        }
      },
      {
        $sort: { totalQuantity: -1 }
      },
      {
        $limit: 1
      },
      {
        $project: {
          _id: 0,
          product: '$_id.product',
          date: '$_id.date',
          totalQuantity: 1
        }
      }
    ]);
    res.json(highestQuantitySold[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
