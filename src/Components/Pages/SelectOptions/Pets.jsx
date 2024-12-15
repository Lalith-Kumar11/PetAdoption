// src/pets.js

import goldenRetrieverImg from './assets/images/GoldenRetriever.jpeg';
import goldenRetrieverImg1 from './assets/images/GoldenRetriever1.jpeg';
import goldenRetrieverImg2 from './assets/images/GoldenRetriever2.jpeg';
import goldenRetrieverImg3 from './assets/images/GoldenRetriever3.jpeg';

import bulldogImg from './assets/images/BullDog.jpeg';
import bulldogImg1 from './assets/images/BullDog1.jpeg';
import bulldogImg2 from './assets/images/BullDog2.jpeg';
import bulldogImg3 from './assets/images/BullDog3.jpeg';

import poodleImg from './assets/images/Poodle.jpeg';
import poodleImg1 from './assets/images/Poodle1.jpeg';
import poodleImg2 from './assets/images/Poodle2.jpeg';
import poodleImg3 from './assets/images/Poodle3.jpeg';

import persianCatImg from './assets/images/persianCat.jpeg';
import persianCatImg1 from './assets/images/persianCat1.jpeg';
import persianCatImg2 from './assets/images/persianCat2.jpeg';
import persianCatImg3 from './assets/images/persianCat3.jpeg';

import canaryImg from './assets/images/Canary.jpeg';
import canaryImg1 from './assets/images/Canary1.jpeg';
import canaryImg2 from './assets/images/Canary2.jpeg';
import canaryImg3 from './assets/images/Canary3.jpeg';

import siameseCatImg from './assets/images/SiameseCat.jpeg';
import siameseCatImg1 from './assets/images/SiameseCat1.jpeg';
import siameseCatImg2 from './assets/images/SiameseCat2.jpeg';
import siameseCatImg3 from './assets/images/SiameseCat3.jpeg';

import cockatooImg from './assets/images/Cockatoo.jpeg';
import cockatooImg1 from './assets/images/Cockatoo1.jpeg';
import cockatooImg2 from './assets/images/Cockatoo2.jpeg';
import cockatooImg3 from './assets/images/Cockatoo3.jpeg';

import beagleImg from './assets/images/Beagle.jpeg';
import beagleImg1 from './assets/images/Beagle1.jpeg';
import beagleImg2 from './assets/images/Beagle2.jpeg';
import beagleImg3 from './assets/images/Beagle3.jpeg';

import maineCoonImg from './assets/images/MaineCoon.jpeg';
import maineCoonImg1 from './assets/images/MaineCoon1.jpeg';
import maineCoonImg2 from './assets/images/MaineCoon2.jpeg';
import maineCoonImg3 from './assets/images/MaineCoon3.jpeg';

import budgerigarImg from './assets/images/Budgerigar.jpeg';
import budgerigarImg1 from './assets/images/Budgerigar1.jpeg';
import budgerigarImg2 from './assets/images/Budgerigar2.jpeg';
import budgerigarImg3 from './assets/images/Budgerigar3.jpeg';

import labradorRetrieverImg from './assets/images/LabradorRetriver.jpeg';
import labradorRetrieverImg1 from './assets/images/LabradorRetriver1.jpeg';
import labradorRetrieverImg2 from './assets/images/LabradorRetriver2.jpeg';
import labradorRetrieverImg3 from './assets/images/LabradorRetriver3.jpeg';

import tabbyCatImg from './assets/images/Tabbycat.jpeg';
import tabbyCatImg1 from './assets/images/Tabbycat1.jpeg';
import tabbyCatImg2 from './assets/images/Tabbycat2.jpeg';
import tabbyCatImg3 from './assets/images/Tabbycat3.jpeg';

import lovebirdImg from './assets/images/lovebird.jpeg';
import lovebirdImg1 from './assets/images/lovebird1.jpeg';
import lovebirdImg2 from './assets/images/lovebird2.jpeg';
import lovebirdImg3 from './assets/images/lovebird3.jpeg';

import rottweilerImg from './assets/images/Rottweiler.jpeg';
import rottweilerImg1 from './assets/images/Rottweiler1.jpeg';
import rottweilerImg2 from './assets/images/Rottweiler2.jpeg';
import rottweilerImg3 from './assets/images/Rottweiler3.jpeg';

import angoraCatImg from './assets/images/Angoracat.jpeg';
import angoraCatImg1 from './assets/images/Angoracat1.jpeg';
import angoraCatImg2 from './assets/images/Angoracat2.jpeg';
import angoraCatImg3 from './assets/images/Angoracat3.jpeg';

import siberianHuskyImg from './assets/images/SiberianHusky.jpeg';
import siberianHuskyImg1 from './assets/images/SiberianHusky1.jpeg';
import siberianHuskyImg2 from './assets/images/SiberianHusky2.jpeg';
import siberianHuskyImg3 from './assets/images/SiberianHusky3.jpeg';

import bengalCatImg from './assets/images/BengalCat.jpeg';
import bengalCatImg1 from './assets/images/BengalCat1.jpeg';
import bengalCatImg2 from './assets/images/BengalCat2.jpeg';
import bengalCatImg3 from './assets/images/BengalCat3.jpeg';

import africanGreyImg from './assets/images/AfricanGrey.jpeg';
import africanGreyImg1 from './assets/images/AfricanGrey1.jpeg';
import africanGreyImg2 from './assets/images/AfricanGrey2.jpeg';
import africanGreyImg3 from './assets/images/AfricanGrey3.jpeg';

export const pets = [
    { 
        id: 1, 
        name: 'Bella', 
        breed: 'Golden Retriever', 
        category: 'Dog',
        age: '3 years',
        images: [
            goldenRetrieverImg,
            goldenRetrieverImg1,
            goldenRetrieverImg2,
            goldenRetrieverImg3
        ],
        height: '24 inches',
        weight: '65 lbs',
        adoptedFrom: 'Local Shelter',
        aboutBreed: 'Golden Retrievers are friendly and tolerant dogs.',
        usage: 'Family pet, guide dog, hunting dog',
        price: '₹40,000',
        status: 'Requested'
    },
    { 
        id: 2, 
        name: 'Max', 
        breed: 'Bulldog', 
        category: 'Dog',
        age: '2 years',
        images: [
            bulldogImg,
            bulldogImg1,
            bulldogImg2,
            bulldogImg3
        ],
        height: '14 inches',
        weight: '50 lbs',
        adoptedFrom: 'Bulldog Rescue',
        aboutBreed: 'Bulldogs are known for their loose, saggy skin and wrinkled face.',
        usage: 'Family pet, companion dog',
        price: '₹35,000',
        status: 'Available'
    },
    { 
        id: 3, 
        name: 'Lucy', 
        breed: 'Poodle', 
        category: 'Dog',
        age: '4 years',
        images: [
            poodleImg,
            poodleImg1,
            poodleImg2,
            poodleImg3
        ],
        height: '15 inches',
        weight: '45 lbs',
        adoptedFrom: 'Poodle Rescue',
        aboutBreed: 'Poodles are known for their intelligence and hypoallergenic coat.',
        usage: 'Family pet, show dog, service dog',
        price: '₹45,000',
        status: 'Available'
    },
    { 
        id: 4, 
        name: 'Whiskers', 
        breed: 'Persian Cat', 
        category: 'Cat',
        age: '3 years',
        images: [
            persianCatImg,
            persianCatImg1,
            persianCatImg2,
            persianCatImg3
        ],
        height: '10 inches',
        weight: '12 lbs',
        adoptedFrom: 'Cat Rescue Center',
        aboutBreed: 'Persian cats are known for their long fur and gentle temperament.',
        usage: 'Family pet, show cat',
        price: '₹30,000',
        status: 'Available'
    },
    { 
        id: 5, 
        name: 'Tweety', 
        breed: 'Canary', 
        category: 'Parrot',
        age: '2 years',
        images: [
            canaryImg,
            canaryImg1,
            canaryImg2,
            canaryImg3
        ],
        height: '5 inches',
        weight: '1.5 oz',
        adoptedFrom: 'Bird Rescue',
        aboutBreed: 'Canaries are known for their singing abilities.',
        usage: 'Pet, singing bird',
        price: '₹8,000',
        status: 'Available'
    },
    { 
        id: 6, 
        name: 'Shadow', 
        breed: 'Siamese Cat', 
        category: 'Cat',
        age: '4 years',
        images: [
            siameseCatImg,
            siameseCatImg1,
            siameseCatImg2,
            siameseCatImg3
        ],
        height: '11 inches',
        weight: '14 lbs',
        adoptedFrom: 'Cat Haven',
        aboutBreed: 'Siamese cats are known for their blue almond-shaped eyes and sleek bodies.',
        usage: 'Family pet, show cat',
        price: '₹28,000',
        status: 'Available'
    },
    {
        id: 7,
        name: 'Coco',
        breed: 'Cockatoo',
        category: 'Parrot',
        age: '3 years',
        images: [
            cockatooImg,
            cockatooImg1,
            cockatooImg2,
            cockatooImg3
        ],
        height: '18 inches',
        weight: '1.5 lbs',
        adoptedFrom: 'Parrot Rescue',
        aboutBreed: 'Cockatoos are known for their impressive crests and affectionate nature.',
        usage: 'Pet, companion bird',
        price: '₹25,000',
        status: 'Available'
    },
    {
        id: 8,
        name: 'Charlie',
        breed: 'Beagle',
        category: 'Dog',
        age: '4 years',
        images: [
            beagleImg,
            beagleImg1,
            beagleImg2,
            beagleImg3
        ],
        height: '15 inches',
        weight: '22 lbs',
        adoptedFrom: 'Beagle Rescue',
        aboutBreed: 'Beagles are known for their great sense of smell and tracking instincts.',
        usage: 'Family pet, hunting dog',
        price: '₹20,000',
        status: 'Available'
    },
    {
        id: 9,
        name: 'Mittens',
        breed: 'Maine Coon',
        category: 'Cat',
        age: '2 years',
        images: [
            maineCoonImg,
            maineCoonImg1,
            maineCoonImg2,
            maineCoonImg3
        ],
        height: '16 inches',
        weight: '18 lbs',
        adoptedFrom: 'Cat Rescue',
        aboutBreed: 'Maine Coons are one of the largest domesticated cat breeds, known for their friendly nature.',
        usage: 'Family pet, show cat',
        price: '₹35,000',
        status: 'Available'
    },
    {
        id: 10,
        name: 'Sky',
        breed: 'Budgerigar',
        category: 'Parrot',
        age: '2 years',
        images: [
            budgerigarImg,
            budgerigarImg1,
            budgerigarImg2,
            budgerigarImg3
        ],
        height: '7 inches',
        weight: '1 oz',
        adoptedFrom: 'Bird Rescue',
        aboutBreed: 'Budgerigars, or budgies, are small, colorful birds known for their playful nature.',
        usage: 'Pet, singing bird',
        price: '₹5,000',
        status: 'Available'
    },
    {
        id: 11,
        name: 'Buddy',
        breed: 'Labrador Retriever',
        category: 'Dog',
        age: '4 years',
        images: [
            labradorRetrieverImg,
            labradorRetrieverImg1,
            labradorRetrieverImg2,
            labradorRetrieverImg3
        ],
        height: '23 inches',
        weight: '70 lbs',
        adoptedFrom: 'Dog Rescue Center',
        aboutBreed: 'Labrador Retrievers are known for their friendly and outgoing nature.',
        usage: 'Family pet, service dog, hunting dog',
        price: '₹30,000',
        status: 'Available'
    },
    {
        id: 12,
        name: 'Milo',
        breed: 'Tabby Cat',
        category: 'Cat',
        age: '3 years',
        images: [
            tabbyCatImg,
            tabbyCatImg1,
            tabbyCatImg2,
            tabbyCatImg3
        ],
        height: '12 inches',
        weight: '15 lbs',
        adoptedFrom: 'Cat Adoption Center',
        aboutBreed: 'Tabby cats are known for their distinctive coat patterns and friendly nature.',
        usage: 'Family pet',
        price: '₹20,000',
        status: 'Available'
    },
    {
        id: 13,
        name: 'Kiwi',
        breed: 'Lovebird',
        category: 'Parrot',
        age: '2 years',
        images: [
            lovebirdImg,
            lovebirdImg1,
            lovebirdImg2,
            lovebirdImg3
        ],
        height: '6 inches',
        weight: '2 oz',
        adoptedFrom: 'Bird Rescue',
        aboutBreed: 'Lovebirds are small, affectionate parrots known for their strong pair bonds.',
        usage: 'Pet, companion bird',
        price: '₹8,000',
        status: 'Available'
    },
    {
        id: 14,
        name: 'Rocky',
        breed: 'Rottweiler',
        category: 'Dog',
        age: '2 years',
        images: [
            rottweilerImg,
            rottweilerImg1,
            rottweilerImg2,
            rottweilerImg3
        ],
        height: '27 inches',
        weight: '95 lbs',
        adoptedFrom: 'Dog Rescue Center',
        aboutBreed: 'Rottweilers are known for their strength, loyalty, and protective nature.',
        usage: 'Family pet, guard dog, working dog',
        price: '₹40,000',
        status: 'Available'
    },
    {
        id: 15,
        name: 'Snowball',
        breed: 'Angora Cat',
        category: 'Cat',
        age: '2 years',
        images: [
            angoraCatImg,
            angoraCatImg1,
            angoraCatImg2,
            angoraCatImg3
        ],
        height: '11 inches',
        weight: '10 lbs',
        adoptedFrom: 'Cat Rescue',
        aboutBreed: 'Angora cats are known for their long, silky fur and playful nature.',
        usage: 'Family pet, show cat',
        price: '₹25,000',
        status: 'Available'
    },
    {
        id: 16,
        name: 'Luna',
        breed: 'Siberian Husky',
        category: 'Dog',
        age: '4 years',
        images: [
            siberianHuskyImg,
            siberianHuskyImg1,
            siberianHuskyImg2,
            siberianHuskyImg3
        ],
        height: '23 inches',
        weight: '60 lbs',
        adoptedFrom: 'Dog Rescue Center',
        aboutBreed: 'Siberian Huskies are known for their friendly and energetic nature.',
        usage: 'Family pet, sled dog',
        price: '₹35,000',
        status: 'Available'
    },
    {
        id: 17,
        name: 'Ziggy',
        breed: 'Bengal Cat',
        category: 'Cat',
        age: '3 years',
        images: [
            bengalCatImg,
            bengalCatImg1,
            bengalCatImg2,
            bengalCatImg3
        ],
        height: '14 inches',
        weight: '15 lbs',
        adoptedFrom: 'Cat Rescue',
        aboutBreed: 'Bengal Cats are known for their wild appearance and playful personality.',
        usage: 'Family pet, show cat',
        price: '₹30,000',
        status: 'Available'
    },
    {
        id: 18,
        name: 'Alex',
        breed: 'African Grey Parrot',
        category: 'Parrot',
        age: '1 years',
        images: [
            africanGreyImg,
            africanGreyImg1,
            africanGreyImg2,
            africanGreyImg3
        ],
        height: '13 inches',
        weight: '1 lbs',
        adoptedFrom: 'Parrot Rescue',
        aboutBreed: 'African Grey Parrots are known for their intelligence and ability to mimic speech.',
        usage: 'Pet, companion bird',
        price: '₹50,000',
        status: 'Available'
    }
];    
    
       
