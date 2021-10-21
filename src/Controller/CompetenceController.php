<?php

namespace App\Controller;

use App\Repository\CompetencesRepository;
use App\Repository\DescriptionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
     * @Route("/", name="geek-taku_")
     */
class CompetenceController extends AbstractController
{
     /**
     * @Route("competences", name="competences")
     * 
     */
    public function competences(DescriptionRepository $descriptionRepo, CompetencesRepository $competencesRepo): Response
    {
        //dump($descriptionRepo->findAll());
        //dump($competencesRepo->findAll());
        return $this->render('main/competences.html.twig', [
            'descriptionRepo' => $descriptionRepo->findAll(),
            'competencesRepo' => $competencesRepo->findAll(),
        ]);
    }
}
