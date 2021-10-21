<?php

namespace App\Controller;

use App\Repository\ProjetsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
     * @Route("/", name="geek-taku_")
     */
class ProjetController extends AbstractController
{
    /**
     * @Route("/projets", name="projets")
     */
    public function projet(ProjetsRepository $projetsRepo): Response
    {
        //dump($projetsRepo);
        return $this->render('projet/projets.html.twig', [
           "projetsRepo" => $projetsRepo->findAll(),
        ]);
    }
}
