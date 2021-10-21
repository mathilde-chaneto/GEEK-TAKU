<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use App\Repository\VideosRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
     * @Route("/", name="geek-taku_")
     */
class VideoController extends AbstractController
{
    /**
     * @Route("video", name="video")
     */
    public function videos(VideosRepository $videosRepo, CategoryRepository $categoryRepo): Response
    {
        //dump($videosRepo);
        //dump($categoryRepo);
        return $this->render('video/videos.html.twig', [
            "videosRepo" => $videosRepo->findAll(),
            "categoryRepo" => $categoryRepo->findall(),
        ]);
    }
}
