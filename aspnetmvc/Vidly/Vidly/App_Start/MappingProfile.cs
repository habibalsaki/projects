using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using Vidly.Models;
using Vidly.DTO;

namespace Vidly.App_Start
{
    public class MappingProfile : Profile
    {
       public MappingProfile()
       {
            CreateMap<Movie, MovieDTO>();
            CreateMap<MovieDTO, Movie>().ForMember(m => m.Id, opt => opt.Ignore());
       }
    }
}