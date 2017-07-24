using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Vidly.Models;

namespace Vidly.Controllers.api
{
    public class MembershipTypesController : ApiController
    {
        private VidlyContext _context; 

        public MembershipTypesController()
        {
            _context = new VidlyContext();
        }
        public IEnumerable<MembershipType> GetMembershipTypes() {
            return _context.MembershipType.ToList();
        }

        public MembershipType GetMembershipType(int id)
        {
            var membershipType = _context.MembershipType.SingleOrDefault(c => c.Id == id);
            if (membershipType == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);

            return membershipType;
        }

        [HttpPost]
        public MembershipType CreateMembershipType(MembershipType membershipType)
        {
            if (!ModelState.IsValid)
                throw new HttpResponseException(HttpStatusCode.BadRequest);

            _context.MembershipType.Add(membershipType);
            _context.SaveChanges();

            return membershipType;
        }

        [HttpPut]
        public void UpdateMembershipTYpe(int id, MembershipType membershipType)
        {
            if (!ModelState.IsValid)
                throw new HttpResponseException(HttpStatusCode.BadRequest);

            var membershipTypeInDb = _context.MembershipType.SingleOrDefault(c => c.Id == id);
            if (membershipTypeInDb == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);

            membershipTypeInDb.SignUpFee = membershipType.SignUpFee;
            membershipTypeInDb.DurationInMonth = membershipType.DurationInMonth;
            membershipTypeInDb.DiscountRate = membershipType.DiscountRate;

            _context.SaveChanges();
        }

        [HttpDelete]

        public void DeleteMembershipType(int id)
        {
            var membershipTypeInDb = _context.MembershipType.SingleOrDefault(c => c.Id == id);
            if (membershipTypeInDb == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);
            _context.MembershipType.Remove(membershipTypeInDb);
            _context.SaveChanges();
        }
    }
}
