import { useState } from "react";

import battery from '../assets/electric/battery.jpg';
import fan from '../assets/electric/ceiling-fan-repairing-services.jpeg';
import fan_light from '../assets/electric/fancy_light.jpg';
import internal from '../assets/electric/electrical-internal-wiring-service.jpg';
import fuse from '../assets/electric/fuse.jpg';
import mcb from "../assets/electric/mcb.webp";
import inverter from '../assets/electric/inverter.jpg';
import socket from '../assets/electric/socket.jpg';
import stablizer from '../assets/electric/stablizer.jpg';
import swithc from '../assets/electric/swithc_board.jpg';
import Tubelight from '../assets/electric/Tubelight-installation.jpg';
import heater from '../assets/electric/heater.jpg';

import sound from '../assets/electric/sound.avif';

import phase from '../assets/electric/3phase.webp';
import cooler from '../assets/electric/Cooler.webp';


import tapRepair from "../assets/tap_repair.jpg";
import tapRep from "../assets/tap_replacment.jpg";
import jet from "../assets/jetspray.jpg";
import flush from "../assets/flush_repair.jpg";
import flush_tank from "../assets/flush_tank.jpg";
import bathroom from "../assets/bathroom_tile_fitting.avif";

import Balcony from "../assets/balcony_drain.jpg";
import exhaust from "../assets/electric/exhaust.jpg";

import shower from "../assets/shower_installation.jpg";
import washing_machine from "../assets/washing_machine.jpg";
import waste_pipe from "../assets/waste_pipe.jpg";
import water_nozel from "../assets/water_nzoel.jpg";
import regulator from "../assets/electric/regulator.jpg";
import water_tank from "../assets/water_tank.jpg";

import minor from "../assets/minor.jpg";
import jag from "../assets/jag.jpg";

import wester_toilet_reapiar from "../assets/wester_toilet_reapiar.jpg";

import commod from "../assets/commod.jpg";

import basin from "../assets/basin_installl.avif";
import hose from "../assets/hose.jpg";

const getServiceImage = (serviceName, category) => {
  const plumbingImages = {
    "Tap Repair": tapRepair,
    "Tap repair": tapRepair,
    "Tap installation": tapRep,
    "Waste pipe leakage":
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    "Jet spray (installation/repair)": jet,
    "Flush tank repair (external - PVC)": flush_tank,
    "Flush tank repair (external ceramic)": flush_tank,
    "Commode cover": commod,
    "Jacuzzi (standard fitting)": jag,
    Shower: shower,
    "Standard tap washer/spindle repair": tapRep,
    "Wash basin drain clear": basin,
    "Toilet jet repair": jet,
    Others: tapRep,
    "Flush tank repair (concealed)": flush_tank,
    "Flush tank repair (external PVC)": flush_tank,
    "Flush tank replacement": flush_tank,
    "Toilet seat cover replacement": wester_toilet_reapiar,
    "Connection hose installation": hose,
    "Washing machine inlet installation": washing_machine,
    "Washing machine filter": washing_machine,
    "Shower filter installation (advanced)": shower,
    "Flush tank repair (cistern)": flush_tank,
    "Tap replacement (per unit)": tapRep,
    "Western toilet replacement (floor mounted)": wester_toilet_reapiar,
    "Western toilet installation (wall mounted)": wester_toilet_reapiar,
    "Western toilet replacement (wall mounted)": wester_toilet_reapiar,
    "Minor fitting installation": minor,
    "Wash basin installation": basin,
    "Wash basin blockage removal": basin,
    "Bathroom tile gap filling": bathroom,
    "Kitchen tile gap filling":
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=300&fit=crop",
    "Shower installation (wall mounted/hand held)": shower,
    "Shower installation (ceiling mounted)": shower,
    "Drain cover installation": Balcony,
    "Balcony drain blockage removal": Balcony,
    "Drainage pipe blockage removal": Balcony,
    "Western toilet installation (floor mounted)": wester_toilet_reapiar,
    "Western toilet repair (floor mounted)": wester_toilet_reapiar,
    "Indian toilet installation (wall mounted)": wester_toilet_reapiar,
    "Hot and cold water mixer":
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
    "Hot and cold mixer installation":
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
    "Water saving nozzle":
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
    "Overhead tank installation (up to 500L)": water_tank,
    "Overhead tank installation (500L–2000L)": water_tank,
    "Overhead tank cleaning (1000L)": water_tank,
    "Underground tank cleaning (1000L)": water_tank,
    "Pipeline leakage repair": waste_pipe,
    "Water meter installation":
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    "Motor installation":
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
    "Motor replacement":
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
    "Motor air cavity removal":
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
    "Tap filter installation": water_nozel,
    "Shower filter installation": shower,
    "Main line filter":
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
  };

  const electricianImages = {
    "Socket replacement":
      socket,
    "Switch board repair":
      swithc,
      "Tube light":Tubelight,
      "Fancy light":fan_light,
      "Inverter":inverter,
      "Others":internal,
    "Fan repair":
      fan,
    "Tubelight repair & installation":
      Tubelight,
    "Tube light installation":
      Tubelight,
    "Fancy light installation":
      fan_light,
    "Inverter installation":
      inverter,
    "Inverter battery replacement":
      battery,
    "New internal wiring (per 5m)":
      internal,
    "New internal wiring with casing (per 5m)":
      internal,
    "Installation (per 5m)":
      internal,
    "Installation (per 10m)":
      internal,
    "Installation (per 15m)":
      internal,
    "Installation (per 20m)":
      internal,
      "Decorative lantern installation":fan_light,
    "Single battery inverter installation":
      inverter,
    "Double battery inverter installation":
      inverter,
    "Inverter fuse replacement":
      "https://images.unsplash.com/photo-1593642532400-2682810df593?w=400&h=300&fit=crop",
    "Inverter servicing":
      inverter,
    "Stabilizer installation":
     stablizer,
     'Inverter fuse replacement':fuse,
    "Room heater repair":
      heater,
    "Door bell installation":
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    "Door bell replacement":
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    "Ceiling fan installation":
      fan,
    "Wall-mounted fan installation":
      fan,
      "Ceiling fan":fan,
      "Wall-mounted fan":fan,
      "Home theatre":sound,
    "Home theatre installation":
      sound,
      "3 phase meter box":phase,
      'Isolator (1 phase)':phase,
      'Isolator (3 phase)':phase,
    "3 phase meter box installation":
      phase,
    "Isolator (1 phase) installation":
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    "Isolator (3 phase) installation":
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    "Cooler (3 ft) repair/installation":
      cooler,
    "Cooler (4ft) repair/installation":
     cooler,
    "Cooler (5ft) repair/installation":
      cooler,
    'Exhaust fan (up to 15")':
      exhaust,
    'Exhaust fan (16"–26")':
      exhaust,
    "Single fan regulator":
      regulator,
    "New MCB":
      mcb,
      "Stabilizer":stablizer,
      "House wiring":internal,
    "Projector and screen":
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=300&fit=crop",
      "Custom repair/installation":internal,
      "At-home consultation for major work":internal
  };

  if (category === "plumbing") {
    return plumbingImages[serviceName] || null;
  } else if (category === "electrician") {
    return electricianImages[serviceName] || null;
  }
  return null;
};

function Services() {
  const [expandedMainCategory, setExpandedMainCategory] = useState(null);
  const [expandedSubCategories, setExpandedSubCategories] = useState({});

  const servicesData = {
    plumbing: {
      title: "Plumbing Services",
      icon: "🔧",
      categories: {
        "Mostly Booked": [
          { name: "Tap Repair", price: "₹300" },
          { name: "Waste pipe leakage", price: "₹400" },
          { name: "Jet spray (installation/repair)", price: "₹350" },
          { name: "Flush tank repair (external - PVC)", price: "₹399" },
          { name: "Tap replacement (per unit)", price: "₹300" },
        ],
        "Basin & Sink": [
          { name: "Waste pipe leakage", price: "₹400" },
          { name: "Wash basin installation", price: "₹599" },
          { name: "Wash basin blockage removal", price: "₹300" },
        ],
        Grouting: [
          { name: "Bathroom tile gap filling", price: "₹599" },
          { name: "Kitchen tile gap filling", price: "₹550" },
        ],
        "Bath Fitting": [
          { name: "Minor fitting installation", price: "₹300" },
          {
            name: "Shower installation (wall mounted/hand held)",
            price: "₹300",
          },
          { name: "Shower installation (ceiling mounted)", price: "₹300" },
        ],
        "Drainage Pipes": [
          { name: "Drain cover installation", price: "₹299" },
          { name: "Balcony drain blockage removal", price: "on visit" },
          { name: "Drainage pipe blockage removal", price: "on visit" },
        ],
        Toilet: [
          { name: "Flush tank repair (external ceramic)", price: "₹499" },
          { name: "Flush tank repair (external PVC)", price: "₹400" },
          { name: "Flush tank repair (concealed)", price: "₹500" },
          {
            name: "Western toilet installation (floor mounted)",
            price: "₹799",
          },
          { name: "Western toilet repair (floor mounted)", price: "₹799" },
          {
            name: "Western toilet replacement (floor mounted)",
            price: "on visit",
          },
          {
            name: "Western toilet installation (wall mounted)",
            price: "on visit",
          },
          {
            name: "Western toilet replacement (wall mounted)",
            price: "on visit",
          },
          { name: "Indian toilet installation (wall mounted)", price: "₹800" },
          { name: "Flush tank replacement", price: "₹600" },
          { name: "Toilet seat cover replacement", price: "₹300" },
          { name: "Jet spray (installation/repair)", price: "₹300" },
        ],
        "Tap & Mixer": [
          { name: "Hot and cold water mixer", price: "₹599" },
          { name: "Tap repair", price: "₹300" },
          { name: "Tap installation", price: "₹350" },
          { name: "Hot and cold mixer installation", price: "₹600" },
          { name: "Water saving nozzle", price: "₹300" },
        ],
        "Water Tank": [
          { name: "Overhead tank installation (up to 500L)", price: "₹1000" },
          { name: "Overhead tank installation (500L–2000L)", price: "₹1200" },
          { name: "Overhead tank cleaning (1000L)", price: "₹1500" },
          { name: "Underground tank cleaning (1000L)", price: "on visit" },
          { name: "Pipeline leakage repair", price: "₹400" },
          { name: "Water meter installation", price: "₹450" },
        ],
        Motor: [
          { name: "Motor installation", price: "₹450" },
          { name: "Motor replacement", price: "₹500" },
          { name: "Motor air cavity removal", price: "₹300" },
        ],
        "Water Pipe Connection": [
          { name: "Connection hose installation", price: "on visit" },
          { name: "Washing machine inlet installation", price: "on visit" },
        ],
        "Water Filter": [
          { name: "Tap filter installation", price: "₹300" },
          { name: "Shower filter installation", price: "₹300" },
          { name: "Main line filter", price: "₹350" },
          { name: "Washing machine filter", price: "on visit" },
          { name: "Shower filter installation (advanced)", price: "on visit" },
        ],
        Repair: [
          { name: "Tap repair", price: "₹300" },
          { name: "Commode cover", price: "₹300" },
          { name: "Flush tank repair (cistern)", price: "₹300" },
          { name: "Jacuzzi (standard fitting)", price: "₹300" },
          { name: "Shower", price: "₹300" },
          { name: "Standard tap washer/spindle repair", price: "₹300" },
          { name: "Toilet jet repair", price: "₹400" },
          { name: "Wash basin drain clear", price: "₹400" },
          { name: "Others", price: "on visit" },
        ],
      },
    },
    electrician: {
      title: "Electrician Services",
      icon: "⚡",
      categories: {
        "Mostly Booked": [
          { name: "Socket replacement", price: "₹300" },
          { name: "Switch board repair", price: "₹300" },
          { name: "Fan repair", price: "₹400" },
          { name: "Tubelight repair & installation", price: "₹300" },
        ],
        Repair: [
          { name: "Tube light", price: "₹300" },
          { name: "Fancy light", price: "₹350" },
          { name: "Inverter", price: "₹450" },
          { name: "Inverter battery replacement", price: "on visit" },
          { name: "Others", price: "on visit" },
        ],
        Wiring: [
          { name: "New internal wiring (per 5m)", price: "₹300" },
          { name: "New internal wiring with casing (per 5m)", price: "₹350" },
        ],
        "Decorative Lights": [
          { name: "Installation (per 5m)", price: "₹300" },
          { name: "Installation (per 10m)", price: "₹350" },
          { name: "Installation (per 15m)", price: "₹400" },
          { name: "Installation (per 20m)", price: "₹400" },
          { name: "Decorative lantern installation", price: "on visit" },
        ],
        "Inverter & Stabilizer": [
          { name: "Single battery inverter installation", price: "on visit" },
          { name: "Double battery inverter installation", price: "on visit" },
          { name: "Inverter fuse replacement", price: "₹400" },
          { name: "Inverter servicing", price: "₹400" },
          { name: "Stabilizer installation", price: "₹400" },
        ],
        Appliance: [{ name: "Room heater repair", price: "on visit" }],
        "Door Bell": [
          { name: "Door bell installation", price: "₹250" },
          { name: "Door bell replacement", price: "₹300" },
        ],
        "Installation / Fitting": [
          { name: "Ceiling fan", price: "₹400" },
          { name: "Wall-mounted fan", price: "₹400" },
          { name: "Home theatre", price: "₹400" },
          { name: "Inverter", price: "₹450" },
          { name: "3 phase meter box", price: "₹500" },
          { name: "Isolator (1 phase)", price: "₹400" },
          { name: "Isolator (3 phase)", price: "₹400" },
          { name: "Cooler (3 ft) repair/installation", price: "₹400" },
          { name: "Cooler (4ft) repair/installation", price: "₹500" },
          { name: "Cooler (5ft) repair/installation", price: "₹600" },
          { name: 'Exhaust fan (up to 15")', price: "₹400" },
          { name: 'Exhaust fan (16"–26")', price: "₹450–₹500" },
          { name: "Single fan regulator", price: "₹400" },
          { name: "New MCB", price: "₹300" },
          { name: "Stabilizer", price: "₹400" },
          { name: "Projector and screen", price: "₹1100" },
          { name: "House wiring", price: "on visit" },
          { name: "Others", price: "on visit" },
        ],
        "Something Else": [
          { name: "Custom repair/installation", price: "₹100" },
          { name: "At-home consultation for major work", price: "₹100" },
        ],
      },
    },
  };

  const toggleMainCategory = (category) => {
    setExpandedMainCategory(
      expandedMainCategory === category ? null : category
    );
    setExpandedSubCategories({});
  };

  const toggleSubCategory = (subCategory) => {
    setExpandedSubCategories((prev) => ({
      ...prev,
      [subCategory]: !prev[subCategory],
    }));
  };

  const handleWhatsAppClick = (serviceName) => {
    const message = encodeURIComponent(
      `Hello, I'd like to book ${serviceName}`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p className="services-subtitle">
        Professional solutions for all your home needs
      </p>

      <div className="category-cards">
        <div
          className="category-card"
          onClick={() => toggleMainCategory("plumbing")}
        >
          <div className="category-icon">{servicesData.plumbing.icon}</div>
          <h2>{servicesData.plumbing.title}</h2>
          <button className="expand-btn">
            {expandedMainCategory === "plumbing" ? "Close" : "View Services"}
          </button>
        </div>

        <div
          className="category-card"
          onClick={() => toggleMainCategory("electrician")}
        >
          <div className="category-icon">{servicesData.electrician.icon}</div>
          <h2>{servicesData.electrician.title}</h2>
          <button className="expand-btn">
            {expandedMainCategory === "electrician" ? "Close" : "View Services"}
          </button>
        </div>
      </div>

      {expandedMainCategory && (
        <div className="services-list">
          <h2>{servicesData[expandedMainCategory].title}</h2>

          <div className="subcategories-container">
            {Object.entries(servicesData[expandedMainCategory].categories).map(
              ([categoryName, services]) => (
                <div key={categoryName} className="subcategory-section">
                  <div
                    className="subcategory-header"
                    onClick={() => toggleSubCategory(categoryName)}
                  >
                    <h3>{categoryName}</h3>
                    <span className="toggle-icon">
                      {expandedSubCategories[categoryName] ? "−" : "+"}
                    </span>
                  </div>

                  {expandedSubCategories[categoryName] && (
                    <div className="service-cards-grid">
                      {services.map((service, index) => (
                        <div key={index} className="service-card">
                          <div className="service-card-image">
                            <img
                              src={getServiceImage(
                                service.name,
                                expandedMainCategory
                              )}
                              alt={service.name}
                              loading="lazy"
                            />
                          </div>
                          <div className="service-card-content">
                            <h4 className="service-card-title">
                              {service.name}
                            </h4>
                            <p className="service-card-price">
                              {service.price}
                            </p>
                            <div className="service-card-actions">
                              <button
                                className="service-card-btn whatsapp-btn-card"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleWhatsAppClick(service.name);
                                }}
                                title="Contact via WhatsApp"
                              >
                                WhatsApp
                              </button>
                              <button
                                className="service-card-btn book-btn-card"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleWhatsAppClick(service.name);
                                }}
                                title="Book this service"
                              >
                                Book Now
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
