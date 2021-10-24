<?php

namespace App\Controller;

use App\Repository\CompetencesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\File\File;

  /**
     * @Route("/", name="geek-taku_")
     */
class MainController extends AbstractController
{
  
    /**
     * @Route("", name="main")
     */
    public function index(CompetencesRepository $competencesRepo): Response
    {
        return $this->render('main/index.html.twig', [
            "competencesRepo" => $competencesRepo->findAll(),
        ]);
    }


      /**
     * @Route("mentions-legales", name="mentions-legales")
     */
    public function mentionsLegales(): Response
    {
        return $this->render('main/mentions-legales.html.twig');
    }

      /**
     * @Route("about", name="about")
     */
    public function about(): Response
    {
        return $this->render('main/about.html.twig');
    }
     /**
     * @Route("alternance-cv", name="alternance-cv")
     */
    public function downloadAlternanceCV(): Response
    {
        $file = new File('cv_alternance-mathilde-chane-to.pdf');
        return $this->file($file);

    }

     /**
     * @Route("cv", name="cv")
     */
    public function CVDownload(): Response
    {
        $file = new File('cv_mathilde-chane-to.pdf');
        return $this->file($file);

    }
}
