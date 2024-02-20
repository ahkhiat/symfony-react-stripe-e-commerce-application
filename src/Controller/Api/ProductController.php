<?php

namespace App\Controller\Api;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    #[Route('/api/products', name: 'api_get_products', methods: ['GET'])]
    public function getProducts(ProductRepository $productRepository, NormalizerInterface $normalizer) : Response
    {
        $products = $productRepository->findAll();

        $serializedProducts = $normalizer->normalize($products, 'json', [
            'groups' => 'product:read'
        ]);

        return $this->json($serializedProducts);
    } 
}