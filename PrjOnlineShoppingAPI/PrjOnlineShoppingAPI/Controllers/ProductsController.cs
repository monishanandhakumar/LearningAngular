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
using System.Web.Http.Cors;//cors:cross origin resource sharing,w3c standard,
using PrjOnlineShoppingAPI.Models;

namespace PrjOnlineShoppingAPI.Controllers
{
    [EnableCors(origins: "http://localhost:4800", headers: "*", methods: "*")]
    public class ProductsController : ApiController
    {
        private dbOnlineDatabaseEntities1 db = new dbOnlineDatabaseEntities1();

        // GET: api/Products
        public IQueryable<tblProduct> GettblProducts()
        {
            return db.tblProducts;
        }

        // GET: api/Products/5
        [ResponseType(typeof(tblProduct))]
        public IHttpActionResult GettblProduct(int id)
        {
            tblProduct tblProduct = db.tblProducts.Find(id);
            if (tblProduct == null)
            {
                return NotFound();
            }

            return Ok(tblProduct);
        }

        // PUT: api/Products/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PuttblProduct(int id, tblProduct tblProduct)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblProduct.productid)
            {
                return BadRequest();
            }

            db.Entry(tblProduct).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tblProductExists(id))
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

        // POST: api/Products
        [ResponseType(typeof(tblProduct))]
        public IHttpActionResult PosttblProduct(tblProduct tblProduct)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tblProducts.Add(tblProduct);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tblProduct.productid }, tblProduct);
        }

        // DELETE: api/Products/5
        [ResponseType(typeof(tblProduct))]
        public IHttpActionResult DeletetblProduct(int id)
        {
            tblProduct tblProduct = db.tblProducts.Find(id);
            if (tblProduct == null)
            {
                return NotFound();
            }

            db.tblProducts.Remove(tblProduct);
            db.SaveChanges();

            return Ok(tblProduct);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tblProductExists(int id)
        {
            return db.tblProducts.Count(e => e.productid == id) > 0;
        }
    }
}