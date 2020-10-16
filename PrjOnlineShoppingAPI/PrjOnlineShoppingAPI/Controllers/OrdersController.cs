using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using PrjOnlineShoppingAPI.Models;

namespace PrjOnlineShoppingAPI.Controllers
{
    public class OrdersController : ApiController
    {
        private dbOnlineDatabaseEntities1 db = new dbOnlineDatabaseEntities1();

        // GET: api/Orders
        public IQueryable<tblOrder> GettblOrders()
        {
            return db.tblOrders;
        }

        // GET: api/Orders/5
        [ResponseType(typeof(tblOrder))]
        public IHttpActionResult GettblOrder(int id)
        {
            tblOrder tblOrder = db.tblOrders.Find(id);
            if (tblOrder == null)
            {
                return NotFound();
            }

            return Ok(tblOrder);
        }

        // PUT: api/Orders/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PuttblOrder(int id, tblOrder tblOrder)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblOrder.orderid)
            {
                return BadRequest();
            }

            db.Entry(tblOrder).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tblOrderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Orders
        [ResponseType(typeof(tblOrder))]
        public IHttpActionResult PosttblOrder(tblOrder tblOrder)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tblOrders.Add(tblOrder);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tblOrder.orderid }, tblOrder);
        }

        // DELETE: api/Orders/5
        [ResponseType(typeof(tblOrder))]
        public IHttpActionResult DeletetblOrder(int id)
        {
            tblOrder tblOrder = db.tblOrders.Find(id);
            if (tblOrder == null)
            {
                return NotFound();
            }

            db.tblOrders.Remove(tblOrder);
            db.SaveChanges();

            return Ok(tblOrder);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tblOrderExists(int id)
        {
            return db.tblOrders.Count(e => e.orderid == id) > 0;
        }
    }
}