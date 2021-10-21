<?php

namespace App\Controller;

use App\Repository\IllustrationsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
     * @Route("/", name="geek-taku_")
     */

class IllustrationController extends AbstractController
{
    /**
     * @Route("illustrations", name="illustrations")
     */
    public function illustrations(IllustrationsRepository $illustrationsRepo): Response
    {
        //dump($illustrationsRepo);
        return $this->render('illustration/illustrations.html.twig', [
            "illustrationsRepo" => $illustrationsRepo->findAll(),
        ]);
    }
}
